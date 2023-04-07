const { updateData } = require("../../services/userServices/userservice")

const deleteUser=async (req,res)=>{

    const deleteUser=await updateData(req.params.userId,{isDeleted:true});
    if(!deleteUser) return res.status(404).send({status:false,message:'no user found'})
    return res.status(200).send({status:true,message:'user deleted successfully'})

}
module.exports={deleteUser}