const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

//controller
let productController = require('../controllers/productController');
let productControllerDb= require('../controllers/productControllerDb')

//express-validator-middlewares
const validationsAddProduct=require('../../middlewares/validationsAddProductMiddleware')
const adminMiddleware=require('../../middlewares/adminMiddleware')
const authMiddleware=require('../../middlewares/authMiddleware')


//MULTER SETUP

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, "../../public/img"))
    },
    filename: function (req, file, cb) {
        cb(null, "PRODUCTO" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage });


//ROUTES
router.get('/list/admin', authMiddleware ,productControllerDb.productList); //ADMIN

router.get('/list', adminMiddleware, productControllerDb.productListUser); //USER

router.get('/detail/:id', productController.productDetail);

//route get create form
router.get('/create', authMiddleware, productController.productCreate);
//store new product
router.post('/create', upload.single("image"), validationsAddProduct, productController.productSave); //multer middleware

//route get edit form
router.get('/edit/:id', authMiddleware, productController.productEdit);
//update product
router.put('/edit/:id', upload.single("image"), productController.productUpdate); //multer middleware
//delete product
router.delete('/delete/:id', authMiddleware,  productController.productDelete);


module.exports = router;