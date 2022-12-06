const fs = require("fs");
const path = require("path");
const router = require("../routers/mainRoutes");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = db.Sequelize;

const { validationResult } = require("express-validator");
const Product = require("../database/models/Product");


const productControllerDb = {
    productListUser: async (req, res) => {
        try {
            const productos = await db.Product.findAll({include:{all:true}});
            const categorias= await db.Category.findAll();
            // res.send(productos)
            res.render('productListUser', { productos, categorias })
        } catch (error) {
            console.log(error)
        }

    },

    productList: async (req, res) => {
        try {
            const productos = await db.Product.findAll();
            res.render('productList', { productos })
        } catch (error) {
            console.log(error)
        }

    },

    productDetail: async (req, res) => {
        try {
            let { id } = req.params;
            let producto = await db.Product.findByPk(id);
            res.render('productDetail', { producto })
        } catch (error) {
            console.log(error)
        }
    },

    //FORM CREACION PRODUCTO/GET
    productCreate: (req, res) => {
        return res.render('addProduct')
    },

    //GUARDAR PRODUCTO/POST
    productSave: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render("addProduct", {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                })
            }

            //CONSULTAR 
            let productos = await db.Product.findAll();
            let indexMap = productos.map(product => product.id);
            let newIndex = Math.max(...indexMap) + 1;

            if (req.body.descuento == "") {
                req.body.descuento = 0;
            }

            let categorias = ["Computadores", "Notebooks", "Monitores", "Teclados", "Mouse"];
            let categoriaId = categorias.indexOf(req.body.categoria) + 1;


            console.log('HOLAAAAA', req.file)

            let imageFile;
            req.file ? imageFile = req.file.filename : imageFile = "default-image.png"

            await db.Product.create({
                id:newIndex,
                titulo: req.body.titulo,
                descripcionCorta: req.body.descripcionCorta,
                longDesc: req.body.longDesc,
                categoriaId: categoriaId,
                precio: req.body.precio,
                descuento: req.body.descuento,
                img:imageFile
            })

            res.redirect("/product/list");
        } catch (error) {
            console.log(error)
        }
    },

    productDelete: async (req,res)=>{
        try {
            let deleteId=req.params.id;
            await db.Product.destroy({
                where:{
                    id:deleteId
                }
            })
            return res.redirect("/product/list");
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = productControllerDb;