const { FetchUserDetails, fetchLogs } = require("../../services/userServices/userservice");
const { checkFormat } = require("../../utils/validation/validation");

const fetchDetailsLogs=async (req,res)=>{

    // validation of userKey
    let userKey=checkFormat(req.params.userKey)
    if(!userKey) return res.status(400).send({status:false,message:'invalid userKey'})
    // userDetails
    const data=  await FetchUserDetails(userKey);

    if(!data) return res.status(404).send({status:false,message:'user details not found'});
    
// fetch logs

    const chatLogs=await fetchLogs(userKey)
    return res.status(200).send({status:true,message:'successfully retrived',data,chatLogs})

}
module.exports={fetchDetailsLogs}