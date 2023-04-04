const userModel = require("../../models/userModel");

// Regestration service
function checkEmail(email)
{
    try{
   return userModel.findOne(email)
    }
    catch(error)
    {
        return res.status(500).send({ status: false, message: error.message });
    }
}
// data Creation
function createData(data)
{
    try{
    return userModel.create(data)
    }
    catch(error)
    {
        return res.status(500).send({ status: false, message: error.message });
    }

}


module.exports={checkEmail,createData}