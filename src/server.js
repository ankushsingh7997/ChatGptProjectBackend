const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const { dbConnection } = require('./db/dbConnection');
const router = require('./routes/router');
const multer=require('multer')
require('dotenv').config();
const PORT=process.env.PORT ||4000;


// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(multer().any())


app.use(cors({ origin: '*' }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });


  // db connection
  dbConnection();

  
  //test
  app.get('/',function(req,res){
    return res.status(200).send({status:true,message:'working fine 🚀 🚀 🚀'})
  });

  app.use('/',router)

  app.listen(PORT,()=>{
    console.log(`application is running on ${PORT} 🟢` );
  });

  // process.on("unhandledRejection", (error, promise) => {
  //   console.log(`Logged Error: ${error}`);
  //   server.close(() => process.exit(1))
  // });
