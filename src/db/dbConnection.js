const mongoose=require('mongoose');

module.exports.dbConnection=function(){
const uri=process.env.URI;
mongoose.set("strictQuery", true);
mongoose.connect(uri,{useNewUrlParser: true,}).then(() => console.log("mongo Db is connected 🟢"))
.catch((err) => console.log('connection error with mongoDb : ',err));
}
