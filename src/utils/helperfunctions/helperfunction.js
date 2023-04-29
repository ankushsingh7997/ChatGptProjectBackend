const generateUserKey=(email,name)=>{
    try{
    let emailString=email.split('@')[0]
     name=name.split(' ')[0]
     name=name.charAt(0)+name.charAt(name.length-1)
    return `${emailString}${name.toUpperCase()}${Math.floor(Math.random()*email.length)+1}`
    }
    catch(error)
    {
        
       return res.status(500).send({status:false,message:error.message})
    }
}
module.exports={generateUserKey}