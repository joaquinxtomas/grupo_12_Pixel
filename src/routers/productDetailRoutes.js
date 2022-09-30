const express = require('express');
const router = express.Router();
// let mainControllers = require('../controllers/mainCrontrollers');
// let loginController = require('../controllers/loginController');
// let registerController = require('../controllers/registerCrontroller');
// let productCartController = require('../controllers/productCartController');

let productDetailController = require('../controllers/productDetailController');

// router.get('/', mainControllers.index);

// router.get('/login', loginController.login);

// router.get('/register', registerController.register);

// router.get('/productCart', productCartController.productCart);

router.get('/', productDetailController.productDetail);

module.exports = router;