const express = require('express');
const router = express.Router();

let productDetailController = require('../controllers/productDetailController');

router.get('/', productDetailController.productDetail);

module.exports = router;