const express=require('express');
const router=express.Router();

const { ask } = require('../controllers/features/chat');
const { register } = require('../controllers/user/userRegister');
const { login } = require('../controllers/user/userLogin');
const { userUpdate } = require('../controllers/user/userUpdate');
const { deleteUser } = require('../controllers/user/deleteUser');
const { deleteChat } = require('../controllers/features/deleteChat');
const { fetchDetailsLogs } = require('../controllers/features/fetchLogs');
const { authentication } = require('../middleware/authentication');
const { authorization } = require('../middleware/authorization');

router.post('/register',register)
router.post('/login',login)
router.post('/ask/:userKey',authentication,ask)
router.put('/user/:userKey/update',authentication,authorization,userUpdate)
router.delete('/user/:userKey/delete',authentication,authorization,deleteUser)
router.delete('/deleteChat/:userKey/:uniqueKey',authentication,authorization,deleteChat)
router.get('/fetchuser/:userKey',fetchDetailsLogs)


module.exports=router;