const mongoose=require('mongoose')

const userDataSchema=new mongoose.Schema({

    userId:{ type:mongoose.Schema.Types.ObjectId,
      
        ref:'user',
        unique:true},
        userKey:{type:String,
          unique:true,require:true},
        questions:{
            type:[Object],
            default:[]
        },
      },{timestamps:true});

    module.exports=mongoose.model('userData',userDataSchema);