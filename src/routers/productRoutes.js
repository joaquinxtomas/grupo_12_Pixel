const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

//controller
let productController = require('../controllers/productController');

//express-validator-middlewares
const validationsAddProduct=require('../../middlewares/validationsAddProductMiddleware')

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
router.get('/list/admin', productController.productList); //ADMIN

router.get('/list', productController.productListUser); //USER

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