const { updateData } = require("../../services/userServices/userservice");
const { checkFormat } = require("../../utils/validation/validation");

const deleteUser=async (req,res)=>{
    try{

    let userKey=checkFormat(req.params.userKey)
    if(!userKey) return res.status(400).send({status:false,message:'invalid userKey'})
    const deleteUser=await updateData(userKey,{isDeleted:true});
    if(!deleteUser) return res.status(404).send({status:false,message:'no user found'})
    return res.status(200).send({status:true,message:'user deleted successfully'})
    }
    catch(error)
    {
        
       return res.status(500).send({status:false,message:error.message})
    }

}
module.exports={deleteUser}