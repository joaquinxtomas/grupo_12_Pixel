const fs = require("fs");
const path = require("path");
const router = require("../routers/mainRoutes");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = db.Sequelize;
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const { validationResult } = require("express-validator");
const User = require("../database/models/User");


let userControllerDb = {
    register: (req,res) => {
        return res.render('register');
    },

    saveRegister:async (req,res) =>{
        try {
            const resultValidation=validationResult(req);
            if ( resultValidation.errors.length>0){
                return res.render("register",{
                    errors:resultValidation.mapped(),
                    oldData:req.body
                })
            }

            let userInDb = await db.User.findOne({
                where:{
                    email:req.body.email
                }
            })

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
                avatar: req.file.filename,
                categoriaId: 1
            }

            console.log(userToCreate)

            await db.User.create(userToCreate);
            return res.redirect("/user/login");
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = userControllerDb;
