const express = require('express');
const router = express.Router();

let productController = require('../controllers/productController');


router.get('/detail', productController.productDetail);

router.get('/create', productController.productCreate)

router.get('/list', productController.productList);

module.exports = router;