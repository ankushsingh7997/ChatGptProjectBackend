const { Configuration, OpenAIApi } =require("openai");
const { checkFormat } = require("../../utils/validation/validation");
const { formatText } = require("../../services/chatServices/chatServices");
const { updateQuestions } = require("../../services/userServices/userservice");



const ask=async (req,res)=>
{
    try{
        const {message}=req.body;

        if(!checkFormat(message)) return res.status(400).send({status:false,message:'please ask me something'})
         
        const configuration = new Configuration({apiKey:process.env.OPENAI_API_KEY});

        const openai=new OpenAIApi(configuration)
       
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            max_tokens: 3000,
            temperature: 0,
          });
          let text=formatText(completion.data.choices[0].text)
          

          let uniqueKey=Date.now().toString();
          
          let userData={$addToSet:{questions:{uniqueKey:uniqueKey,question:message,answer:text}}}
          
          let questionUpdate=await updateQuestions(req.params.userKey,userData)
         
          
          

        return res.status(200).send({status:true,uniqueKey:uniqueKey,question:message,message:text})
}
    catch(error)
    {
        
       return res.status(500).send({status:false,message:error.message})
    }
    
}

module.exports={ask}
























