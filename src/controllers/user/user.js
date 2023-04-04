const userModel = require("../../models/userModel");
const services = require("../../services/userServices/userservice");
const {
  isValidName,
  isValidEmail,
  passwordVal,
} = require("../../utils/validation/validation");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let admin = {};
    // name field---------------------
    if (!name)
      return res
        .status(400)
        .send({ status: false, message: "name is required" });
    else {
      name = name.trim();
      if (name == "")
        return res
          .status(400)
          .send({ status: false, message: "name field cannot be empty" });
      if (!isValidName(name))
        return res
          .status(400)
          .send({ status: false, message: "pass valid name" });
      admin.name = name.toLowerCase();
    }
    // email field-------------------------

    if (!email)
      return res
        .status(400)
        .send({ status: false, message: "email is required" });
    else {
      email = email.trim();
      if (email == "")
        return res
          .status(400)
          .send({ status: false, message: "email field cannot be empty" });
      if (!isValidEmail(email))
        return res
          .status(400)
          .send({ status: false, message: "pass valid email" });
      admin.email = email.toLowerCase();
    }
    // password field----------------------

    if (!password)
      return res
        .status(400)
        .send({ status: false, message: "password is required" });
    else {
      password = password.trim();
      if (password == "")
        return res
          .status(400)
          .send({ status: false, message: "password field cannot be empty" });
      if (!passwordVal(password))
        return res
          .status(400)
          .send({ status: false, message: "pass valid password" });
      admin.password = password;
    }
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

    if (!email)
      return res
        .status(400)
        .send({ status: false, message: "please provide email" });
    email = email.trim().toLowerCase();
    if (email == "")
      return res
        .status(400)
        .send({ status: false, message: "email cannot be empty" });
    if (!isValidEmail(email))
      return res.status(400).send({ status: false, message: "Invalid email" });
    if (!password)
      return res
        .status(400)
        .send({ status: false, message: "please provide password" });
    password = password.trim();
    if (password == "")
      return res
        .status(400)
        .send({ status: false, message: "password cannot be empty" });

    let userData = await services.checkEmail({ email: email, isDeleted: false });
    if (!userData)
      return res
        .status(404)
        .send({ status: false, message: "no user found with this email" });
    else {
      if (userData.password != password)
        return res
          .status(400)
          .send({ status: false, message: "incorrect password" });
    }

    // token creation
    let token = jwt.sign(
      { userId: userData._id.toString(), emailId: userData.email },
      "californium",
      { expiresIn: "10h" }
    );
    res.setHeader("x-api-key", token);
    const obj = {};
    obj.userId = userData._id;
    obj.token = token;
    return res
      .status(200)
      .send({ status: true, message: "User login successfull", data: obj });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { register, login };
