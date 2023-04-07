const { Configuration, OpenAIApi } =require("openai");
const axios=require('axios')


const ask=async (req,res)=>
{
    try{
         
        const {question}=req.body;
        const OPENAI_API_KEY="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";   
        
        // const configuration = new Configuration({
            
        //   apiKey:OPENAI_API_KEY,
        // });

        // const openai = new OpenAIApi(configuration);
        
        //  openai.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: question,
        //     "max_tokens": 7,
        //     "temperature": 0
        //   }).then((res)=> console.log(res)).catch((err)=>{console.log(err)});


        await axios.post(
            'https://api.openai.com/v1/completions',
            {
              model: 'text-davinci-003',
              prompt: question,
              max_tokens: 7,
              temperature: 0,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${OPENAI_API_KEY}`,
              },
            }
          ).then((response)=>console.log(response))




        return res.send('hi')
}
    catch(error)
    {
        console.log(error)
       return res.status(500).send({status:false,message:error.message})
    }
    
}

module.exports={ask}




