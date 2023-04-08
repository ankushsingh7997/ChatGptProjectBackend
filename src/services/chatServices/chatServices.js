const formatText=(text)=>{
   

    text=text.split('\n')
    let formattedText="";

    for(let i in text)
    {
        formattedText+=text[i]+"\n"

    }


    return formattedText

}

module.exports={formatText}