const userDataModel = require("../../models/userDataModel");

const formatText=(text)=>{
  try{
   

    text=text.split('\n')
    let formattedText="";

    for(let i in text)
    {
        formattedText+=text[i]+"\n"

    }


    return formattedText
  }
  catch(error)
    {
        
       return res.status(500).send({status:false,message:error.message})
    }

}


const DeleteAllChat= async(userKey)=>{
  try{

  let result=await userDataModel.findOneAndUpdate({userKey:userKey},{questions:[]},{new:true})
  return result?result:false
  }
  catch(error)
    {
        
       return res.status(500).send({status:false,message:error.message})
    }


}

module.exports={formatText,DeleteAllChat}