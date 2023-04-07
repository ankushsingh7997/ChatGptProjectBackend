const express=require('express');
const router=express.Router();

const { ask } = require('../controllers/features/chat');
const { register } = require('../controllers/user/userRegister');
const { login } = require('../controllers/user/userLogin');
const { userUpdate } = require('../controllers/user/userUpdate');
const { deleteUser } = require('../controllers/user/deleteUser');

router.post('/register',register)
router.post('/login',login)
router.post('/ask',ask)
router.put('/user/:userId/update',userUpdate)
router.delete('/user/:userId/delete',deleteUser)



module.exports=router;