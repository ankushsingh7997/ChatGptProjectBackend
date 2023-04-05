const services = require("../../services/userServices/userservice");
const {isValidName,isValidEmail,passwordVal,checkFormat,
} = require("../../utils/validation/validation");
const bcrypt = require("bcrypt");
const { jwttoken } = require("../../utils/jwttoken/jwttoken");
const cookie=require('cookie');

const register = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let admin = {};
    name=checkFormat(name)
    if (!name)
      return res
        .status(400)
        .send({ status: false, message: "please check your name" })

    if (!isValidName(name))
        return res
          .status(400)
          .send({ status: false, message: "pass valid name" });
      admin.name = name.toLowerCase();
    
    // email field-------------------------

    email=checkFormat(email)
    if (!email)
      return res
        .status(400)
        .send({ status: false, message: "please check your name" })
      if (!isValidEmail(email))
        return res
          .status(400)
          .send({ status: false, message: "pass valid email" });
      admin.email = email.toLowerCase();
   
    // password field----------------------

    password=checkFormat(password)
    if (!password)
      return res
        .status(400)
        .send({ status: false, message: "please check your password" })
      if (!passwordVal(password))
        return res
          .status(400)
          .send({ status: false, message: "pass valid password" });

          //hash user entered password
      admin.password =  await bcrypt.hash(password, password.length);
    
    // check duplicate email
    let checkEmail = await services.checkEmail({email:email});
    if (checkEmail)
      return res
        .status(400)
        .send({ status: false, message: "email is already in use" });

    let createAdmin = await services.createData(admin);
    return res
      .status(200)
      .send({
        status: true,
        message: "registered successfully",
        data: createAdmin,
      });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};
// login
const login = async function (req, res) {
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
    const tokenObject = jwttoken(userData._id,userData.email)
    res.setHeader("x-api-key", tokenObject.token);
    res.cookie('refreshToken',`${tokenObject.refreshToken}`,{maxAge:86400*7000,httpOnly:true})
  //  console.log(res)
    return res
      .status(200)
      .send({ status: true, message: "User login successfull", data: userId = userData._id });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
const logout=async function (req,res)
{
res.clearCookies('refreshToken')
return res.status(200).send({status:true,message:'logout successfully'})

}

module.exports = { register, login,logout };
