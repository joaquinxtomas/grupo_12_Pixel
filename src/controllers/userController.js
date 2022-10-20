const {validationResult}=require("express-validator")
const fs = require ("fs")

const userController = {
    login: (req,res) => { 
        return res.render('login');
    },
    register: (req,res) => {
        return res.render('register');
    },
    saveRegister:(req,res)=>{
        const resultValidation=validationResult(req);
        if ( resultValidation.errors.length>0){
            return res.render("register",{
                errors:resultValidation.mapped(),
                oldData:req.body
            })
        } res.redirect ("/")

    },
    productCart: (req,res) => {
        return res.render('productCart');
    }
}

module.exports = userController;