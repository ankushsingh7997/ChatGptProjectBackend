const services = require("../../services/userServices/userservice");
const bcrypt = require("bcrypt");
const { jwttoken } = require("../../utils/jwttoken/jwttoken");
const { checkFormat, isValidEmail } = require("../../utils/validation/validation");


// login--------------------------------------------------------------------------------
const login = async  (req, res)=> {
  try {
    let { email, password } = req.body;

    email=checkFormat(email)
    if (!email)
      return res
        .status(400)
        .send({ status: false, message: "please check your email" })
        email=email.toLowerCase();
    if (!isValidEmail(email))
      return res.status(400).send({ status: false, message: "Invalid email" });


      password=checkFormat(password)
      if (!password)
        return res
          .status(400)
          .send({ status: false, message: "please check your password" })

    let userData = await services.checkEmail({ email: email, isDeleted: false });
    if (!userData)
      return res
        .status(404)
        .send({ status: false, message: "no user found with this email" });
    else {
        const comparePassword=bcrypt.compareSync(password,userData.password)
      if (!comparePassword)
        return res
          .status(400)
          .send({ status: false, message: "incorrect password" });
    }

    

    // token creation
    const tokenObject = jwttoken(userData._id,userData.userKey,userData.email)
    // res.setHeader("x-api-key", tokenObject.token); 
    console.log(tokenObject.token)

    // res.cookie('refreshToken',`${tokenObject.refreshToken}`,{maxAge:86400*7000,httpOnly:true})
   console.log("\n"+tokenObject.refreshToken)
   const data={
    userId : userData._id, 
    "x-api-key":tokenObject.token,
    refreshToken:tokenObject.refreshToken,
      };
    return res.status(200).send({ status: true, message: "User login successfull", data });
  }
   catch (error) 
   {

    return res.status(500).send({ status: false, message: error.message });

  }
  
};


module.exports = { login };
