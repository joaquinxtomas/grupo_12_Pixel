const express = require('express');
const router = express.Router();

let productController = require('../controllers/productController');


router.get('/detail/:id', productController.productDetail);

router.get('/create', productController.productCreate);

//agregar UPLOAD cuando este MULTER
router.post('/create', productController.productSave);

router.get('/list', productController.productList);

router.get ('/edit/:id', productController.productEdit);
router.post('/edit/:id', productController.productUpdate);

module.exports = router;