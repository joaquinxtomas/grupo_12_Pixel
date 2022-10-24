const express = require('express');
const path=require("path");
const router = express.Router();
const multer = require("multer")
const {body}=require("express-validator");


let userController = require('../controllers/userController');

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.resolve(__dirname,"../../public/img/avatar"))
    },
    filename:function(req,file,cb){
        cb(null, "AVATAR-IMG" + Date.now()+path.extname(file.originalname))
    }
})

const upload = multer ({storage});

const validationsLogin = [
    body('username').notEmpty().withMessage("Debes escribir tu nombre de usuario"),
    body('email')
    .notEmpty().withMessage("Debes escribir un email").bail()
    .isEmail().withMessage("Debes escribir un formato de email válido"),
    body('password').notEmpty().withMessage("Debes escribir tu contraseña"),
]

const validations = [
    body('fullName').notEmpty().withMessage("Debes escribir tu nombre completo"),
    body('username').notEmpty().withMessage("Debes escribir tu nombre de usuario"),
    body('email')
    .notEmpty().withMessage("Debes escribir un email").bail()
    .isEmail().withMessage("Debes escribir un formato de email válido"),
    body('address').notEmpty().withMessage("Debes escribir tu dirección"),
    body('password').notEmpty().withMessage("Debes escribir tu contraseña"),
    body('passwordConfirm')
    .notEmpty().withMessage("Debes confirmar tu contraseña").bail()
    .custom((value,{req}) =>{
        if (req.body.password != req.body.passwordConfirm){
            throw new Error ("Las contraseñas no coinciden")
        }
        return true
    }),
    body("userImg").custom ((value,{req}) =>{
        let file=req.file;
        if (!file){
            throw new Error("Debes subir una imagen");
        }
        return true
    })
]

router.get('/login', userController.login);
router.post('/login', validationsLogin, userController.saveLogin)

router.get('/register', userController.register);
router.post('/register', upload.single("userImg"), validations,  userController.saveRegister);

router.get('/productCart', userController.productCart);



module.exports = router;