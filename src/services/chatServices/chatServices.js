const userDataModel = require("../../models/userDataModel");

const formatText=(text)=>{
   

    text=text.split('\n')
    let formattedText="";

    for(let i in text)
    {
        formattedText+=text[i]+"\n"

    }


    return formattedText

}


const DeleteAllChat= async(userKey)=>{

  let result=await userDataModel.findOneAndUpdate({userKey:userKey},{questions:[]},{new:true})
  return result?result:false


}

module.exports={formatText,DeleteAllChat}