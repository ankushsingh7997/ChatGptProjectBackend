const services = require("../../services/userServices/userservice");
const {isValidName,isValidEmail,passwordVal,checkFormat,   validPhone,
} = require("../../utils/validation/validation");
const bcrypt = require("bcrypt");
const uploadFile = require("../../aws/aws");
const { generateUserKey } = require("../../utils/helperfunctions/helperfunction");

const register = async (req, res) => {
  try {
    let { name, email, password,phone} = req.body;
    let user = {};
    name=checkFormat(name)
    if (!name)
      return res.status(400).send({ status: false, message: "please check your name" })

    if (!isValidName(name))
        return res.status(400).send({ status: false, message: "pass valid name" });
      user.name = name.toLowerCase();
    
    // email field-------------------------

    email=checkFormat(email)
    if (!email)
    return res.status(400).send({ status: false, message: "please check your name" })
    if (!isValidEmail(email))
    return res.status(400).send({ status: false, message: "pass valid email" });
      email = email.toLowerCase();
   
    // password field----------------------

    password=checkFormat(password)
    if (!password)
    return res.status(400).send({ status: false, message: "please check your password" })
    if (!passwordVal(password))
    return res.status(400).send({ status: false, message: "pass valid password" });
    // phone check-----------------------

     let validphone=validPhone(phone)
      if(!validphone) return res.status(400).send({ status: false, message: "please check your  phone number" })
     
       
    //hash user entered password
    user.password =  await bcrypt.hash(password, password.length);
    
    // check duplicate email
    let checkEmailAndnumber = await services.checkEmailAndNumber(email,phone)
    
    if(!checkEmailAndnumber.status) return res.status(400).send({ status: false, message: checkEmailAndnumber.message});
    user.email=email;
    user.phone=phone
    

    
    // generate user key
    user.userKey=generateUserKey(email,name);

    let createUser = await services.createData(user);
    console.log(createUser)
    await services.createFirstUserData(user.userKey)
    console.log(' i am here')
    return res.status(200).send({status: true,message: "registered successfully",data: createUser,});
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { register };