const services = require("../../services/userServices/userservice");
const {isValidName,isValidEmail,passwordVal,checkFormat, isValidImage,
} = require("../../utils/validation/validation");
const bcrypt = require("bcrypt");
const uploadFile = require("../../aws/aws");

const register = async (req, res) => {
  try {
    let { name, email, password} = req.body;
    let user = {};
    name=checkFormat(name)
    if (!name)
      return res
        .status(400)
        .send({ status: false, message: "please check your name" })

    if (!isValidName(name))
        return res
          .status(400)
          .send({ status: false, message: "pass valid name" });
      user.name = name.toLowerCase();
    
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
      user.email = email.toLowerCase();
   
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
    user.password =  await bcrypt.hash(password, password.length);
    
    // check duplicate email
    let checkEmail = await services.checkEmail({email:email});
    if (checkEmail)
    return res
    .status(400)
    .send({ status: false, message: "email is already in use" });

    // Image

    if (req.files.length > 0) 
    {
      user.files = req.files;

      if(user.files[0]&&!isValidImage(user.files[0].originalname))
      {
        return res.status(400).send({status: false,message:"Image format is Invalid please provide .jpg or .png or .jpeg format",});
      }
      else
      {
        let uploadImageUrl=await uploadFile(user.files[0]);
        user.profileImage=uploadImageUrl;
      }

    }

    let createUser = await services.createData(user);
    return res
      .status(200)
      .send({
        status: true,
        message: "registered successfully",
        data: createUser,
      });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { register };