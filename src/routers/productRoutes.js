const express = require('express');
const router = express.Router();

let productDetailController = require('../controllers/productDetailController');
let addProductController = require('../controllers/addProductController');

router.get('/', productDetailController.productDetail);

router.get('/crear', addProductController.add)

router.get('/listado', productDetailController.productList);

module.exports = router;