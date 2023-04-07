const express=require('express');
const router=express.Router();

const { ask } = require('../controllers/features/chat');
const { register } = require('../controllers/user/userRegister');
const { login } = require('../controllers/user/userLogin');
const { userUpdate } = require('../controllers/user/userUpdate');

router.post('/register',register)
router.post('/login',login)
router.post('/ask',ask)
router.put('/user/:userId/update',userUpdate)



module.exports=router;