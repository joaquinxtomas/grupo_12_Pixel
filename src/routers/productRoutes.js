const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const { body } = require("express-validator");

let productController = require('../controllers/productController');

//MULTER

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, "../../public/img"))
    },
    filename: function (req, file, cb) {
        cb(null, "PRODUCTO" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage });

const validationsAddProduct = [
    body('titulo').notEmpty().withMessage(" Debes ingresar un nombre del producto"),
    body('descripcionCorta').notEmpty().withMessage(" Debes ingresar una descripción corta"),
    body('descripcionDetallada').notEmpty().withMessage(" Debes ingresar una descripción detallada"),
    body('categoria').notEmpty().withMessage(" Debes ingresar una categoría"),
    body('precio').notEmpty().withMessage(" Debes ingresar una valor"),
    body('descuento').optional({checkFalsy: true}).isInt({min:0,max:100}).withMessage(" Debes ingresar una valor entre 0 y 100") //.optional({checkFalsy: true}) permite que el campo esté vacio, si tiene números, verifica.
]

router.get('/list', productController.productList);

router.get('/detail/:id', productController.productDetail);

//route get create form
router.get('/create', productController.productCreate);
//store new product
router.post('/create', upload.single("image"), validationsAddProduct, productController.productSave); //multer middleware

//route get edit form
router.get('/edit/:id', productController.productEdit);
//update product
router.put('/edit/:id', upload.single("image"), productController.productUpdate); //multer middleware
//delete product
router.delete('/delete/:id', productController.productDelete);


module.exports = router;