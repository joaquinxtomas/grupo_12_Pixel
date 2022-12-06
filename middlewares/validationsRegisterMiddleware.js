const {body}=require("express-validator");

const validationsRegister = [
    body('fullName').notEmpty().withMessage("Debes escribir tu nombre completo"),
    body('userName').notEmpty().withMessage("Debes escribir tu nombre de usuario"),
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

module.exports=validationsRegister;