const generateUserKey=(email,name)=>{
    let emailString=email.split('@')[0]
     name=name.split(' ')[0]
     name=name.charAt(0)+name.charAt(name.length-1)
    return `${emailString}${name.toUpperCase()}${Math.floor(Math.random()*email.length)+1}`
}
module.exports={generateUserKey}