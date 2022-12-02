const fs= require("fs");
const path =require("path");
const router = require("../routers/mainRoutes");
const db = require('../database/models');
const sequelize = db.sequelize;
const {Op}= db.Sequelize;

const {validationResult}=require("express-validator");


const productControllerDb = {
    productListUser: async (req,res)=>{
        try {
            const productos = await db.Product.findAll();
            res.render('productListUser',{productos})
        } catch (error) {
            console.log(error)
        }

    },

    productList: async (req,res)=>{
        try {
            const productos = await db.Product.findAll();
            res.render('productList',{productos})
        } catch (error) {
            console.log(error)
        }

    },
}

module.exports=productControllerDb;