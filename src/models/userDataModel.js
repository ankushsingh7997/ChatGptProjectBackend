const mongoose=require('mongoose')

const userDataSchema=new mongoose.Schema({

   
        userKey:{type:String,
          require:true,unique:true,},
        questions:{
            type:[Object],
            default:[]
        },
      },{timestamps:true});

    module.exports=mongoose.model('userData',userDataSchema);