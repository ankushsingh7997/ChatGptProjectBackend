const { checkFormat } = require("../utils/validation/validation");

const authorization = async function (req, res, next) {
    try {
      let userTokenId = req.decodedToken.userId;
      let userId = checkFormat(req.params.userId);
      if(!userId) return res.status(400).send({status:false,message:'not authorized'})
      
  
      if (userTokenId != userId)
        return res
          .status(403)
          .send({ status: false, message: "You are not authorized" });
      next();
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  };

  module.exports={authorization}