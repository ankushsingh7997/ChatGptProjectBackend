const mongoose=require('mongoose')

const userDataSchema=new mongoose.Schema({

    userId:{ type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user',
        unique:true},
        questions:{
            type:[Object]
        },
      
  
    
    },{timestamps:true});

    module.exports=mongoose.model('userData',userDataSchema);