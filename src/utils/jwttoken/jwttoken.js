let jwt=require('jsonwebtoken')

function jwttoken(id,userKey,email)
{
  try{
    
    const token = jwt.sign(
        { userId:id.toString(), emailId:email,userKey:userKey },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: process.env.JWT_ACCESS_EXPIRE  }
      );
      const refreshToken=jwt.sign(
        { userId:id.toString(), emailId:email },
        process.env.JWT_REFRESH_TOKEN,
        { expiresIn: process.env.JWT_REFRESH_EXPIRE  }
      );
      return {token,refreshToken}
  }
  catch(error)
    {
        
       return res.status(500).send({status:false,message:error.message})
    }

}
module.exports={jwttoken}