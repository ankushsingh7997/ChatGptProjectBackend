const { DeleteAllChat } = require("../../services/chatServices/chatServices")

const deleteAll= async(req,res)=>{
    const Delete=DeleteAllChat(req.params.userKey)
    if(!Delete) return res.status(404).send({status:false,message:"user not found"});
    return res.status(200).send({status:true,message:'chat deleted successfully'})


}
module.exports={deleteAll}