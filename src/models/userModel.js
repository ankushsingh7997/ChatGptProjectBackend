const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{type:String,required:true},
    password:{type:String,required:true},
    profileImage:{
        type:String,
        default:""
    },
    phone:{
        type:String,
        unique: true,
        required:true
    }
    ,
    userKey:{type:String,unique:true,require:true},

    isDeleted:{type:Boolean,default:false}
    
    },{timestamps:true});

    module.exports=mongoose.model('user',userSchema);