const userDataModel = require("../../models/userDataModel");
const userModel = require("../../models/userModel");

// Regestration service
const checkEmail=async (email)=>
{
    try{
          return await userModel.findOne(email)
      }
    catch(error)
    {
        return res.status(500).send({ status: false, message: error.message });
    }
}
// data Creation
const createData=(data)=>
{
    try{
    return userModel.create(data)
    }
    catch(error)
    {
        return res.status(500).send({ status: false, message: error.message });
    }

}
//user update
const updateData=(userKey,data)=>
{
    try{
        return userModel.findOneAndUpdate({ userKey: userKey, isDeleted: false },data,{ new: true });
    }
    catch(error)
    {
        return res.status(500).send({ status: false, message: error.message });
    }
}

// userData


const createFirstUserData=(userKey)=>{
    try{
        
    return userDataModel.create({userKey:userKey});
    }
    catch(error)
    {
        console.log('then here')
        return res.status(500).send({ status: false, message: error.message });
    }

}

// update question
const updateQuestions=(userKey,object)=>{
    return userDataModel.findOneAndUpdate({userKey:userKey},object,{new:true})

}
// delete question
const deleteQuestion=(userKey,uniqueKey)=>{
    return userDataModel.updateOne({userKey:userKey},{$pull:{questions:{uniqueKey:uniqueKey}}},{new:true});
}

// fetch user Details
const FetchUserDetails= async (userKey)=>{
    let userDetails= await userModel.findOne({userKey:userKey,isDeleted:false});
    if(!userDetails) return false

    return {name:userDetails.name,email:userDetails.email,profileImage:userDetails.profileImage}
}

// fetch question an answer list
const fetchLogs= async (userKey)=>{
    let data= await userDataModel.findOne({userKey:userKey});
    return {questions:data.questions}
    }



module.exports={checkEmail,createData,updateData,updateQuestions,createFirstUserData,deleteQuestion,FetchUserDetails,fetchLogs}