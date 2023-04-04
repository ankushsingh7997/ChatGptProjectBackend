const userModel = require("../../models/userModel");

// Regestration service
function checkEmail(email)
{
   return userModel.findOne(email)
}
// data Creation
function createData(data)
{
    return userModel.create(data)
}


module.exports={checkEmail,createData}