const express=require('express');
const router=express.Router();
const userController=require('../controllers/user/user');
const { ask } = require('../controllers/features/chat');

router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/ask',ask)



module.exports=router;