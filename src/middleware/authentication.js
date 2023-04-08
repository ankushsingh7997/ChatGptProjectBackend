const jwt = require("jsonwebtoken");
const authentication = async function (req, res, next) {
  try {
    if (!req.headers.authorization)
      return res
        .status(400)
        .send({ status: false, message: "token is required" });
    let token = req.headers.authorization.split(" ")[1];
   
    jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, decodedToken) => {
      if (err) 
      {
        return res.status(400).send({ status: false, message:"you have no permission" });
      } else {
        req.decodedToken = decodedToken; 
        next();
      }
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports={authentication}