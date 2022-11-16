const express = require('express');
const path=require("path");
const router = express.Router();
const multer = require("multer")

//controller
let userController = require('../controllers/userController');

//express-validator-middlewares
const validationsRegister=require('../../middlewares/validationsRegisterMiddleware')
const validationsLogin=require('../../middlewares/validationsLoginMiddleware')


//multer setup
const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.resolve(__dirname,"../../public/img/avatar"))
    },
    filename:function(req,file,cb){
        cb(null, "AVATAR-IMG" + Date.now()+path.extname(file.originalname))
    }
})

const upload = multer ({storage});


//User routes
router.get('/login', userController.login);
router.post('/login', validationsLogin, userController.saveLogin)

router.get('/register', userController.register);
router.post('/register', upload.single("userImg"), validationsRegister,  userController.saveRegister);

router.get('/profile',userController.profile)

router.get('/productCart', userController.productCart);

module.exports = router;