const {validationResult}=require("express-validator")
const fs = require ("fs")
const bcrypt=require("bcryptjs")

const User=require("../../models/User")

const userController = {
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
        }

        let userInDb = User.findByField("email", req.body.email)

        if (userInDb){
            return res.render("register",{
                errors: {
                    email: {
                        msg:"Este email ya ha sido registrado"
                    }
                },
                oldData:req.body
            })
        }

        let userToCreate = {
            ...req.body,
            password:bcrypt.hashSync(req.body.password,10),
            passwordConfirm:bcrypt.hashSync(req.body.passwordConfirm), 
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate);
        
        return res.redirect("/user/login");

    },
    login: (req,res) => { 
        return res.render('login');
    },

    saveLogin:(req,res)=>{
        let userToLogin = User.findByField('email', req.body.email);

        if(userToLogin){
            let comparePasswords=bcrypt.compareSync(req.body.password === userToLogin.password);
            if (comparePasswords){
                return res.redirect('/')
            }
            return res.render ("login", {
                errors:{
                    email:{
                        msg:"El email y/o la contraseña son incorrectos"
                    }
                }
            })

        }

        return res.render("login",{
            errors: {
                email:{
                    msg:"Este usuario no ha sido registrado"
                }
            }
        })
    },

    productCart: (req,res) => {
        return res.render('productCart');
    }
}

module.exports = userController;