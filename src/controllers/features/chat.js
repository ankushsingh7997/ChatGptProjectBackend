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
       

        // const completion = await openai.createChatCompletion({
        //   model: "gpt-3.5-turbo",
        //   messages: [{role: "user", content: message}],
        // })

        // let text=formatText(completion.data.choices[0].message.content)
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            max_tokens: 3000,
            temperature: 0,
          });
          let text=formatText(completion.data.choices[0].text)
          console.log(text)

          
          
          let userData={$addToSet:{questions:{uniqueKey:Date.now().toString(),[message]:text}}}
          
          let questionUpdate=await updateQuestions(req.params.userKey,userData)
         
          console.log(questionUpdate)
          

        return res.status(200).send({status:true,message:text})
}
    catch(error)
    {
        
       return res.status(500).send({status:false,message:error.message})
    }
    
}

module.exports={ask}
























// const axios=require('axios')


//    // await axios.post(
        //     'https://api.openai.com/v1/completions',
        //     {
        //       model: 'text-davinci-003',
        //       prompt: question,
        //       max_tokens: 7,
        //       temperature: 0,
        //     },
        //     {
        //       headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${OPENAI_API_KEY}`,
        //       },
        //     }
        //   ).then((response)=>console.log(response))