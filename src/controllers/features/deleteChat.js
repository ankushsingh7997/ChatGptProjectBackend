const { deleteQuestion } = require("../../services/userServices/userservice");
const { checkFormat } = require("../../utils/validation/validation");


const deleteChat=async (req,res)=>{

  try{

    let uniqueKey=checkFormat(req.params.uniqueKey)

    if(!uniqueKey) return res.status(400).send({status:false,message:'invalid uniqueKey'}) 

    let userKey=checkFormat(req.params.userKey)

    if(!userKey) return res.status(400).send({status:false,message:'invalid userKey'})
        const deleteresult=await deleteQuestion(userKey,uniqueKey);
        if(!deleteresult) return res.status(404).send({status:false,message:'no user found'});
        return res.status(200).send({status:true,message:'success'});
     }
    catch(error)
    {
      return res.status(500).send({status:false,message:error.message})
    }

}

module.exports={deleteChat}