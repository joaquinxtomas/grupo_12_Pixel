const express = require('express');
const router = express.Router();

let productDetailController = require('../controllers/productDetailController');
let addProductController = require('../controllers/addProductController');

router.get('/', productDetailController.productDetail);
router.get('/', addProductController.add)

module.exports = router;