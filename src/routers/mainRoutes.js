const express = require('express');
const router = express.Router();
let mainControllers = require('../controllers/mainCrontrollers');
let loginController = require('../controllers/loginController');
let registerController = require('../controllers/registerCrontroller');
let productCartController = require('../controllers/productCartController');


router.get('/', mainControllers.index);

router.get('/login', loginController.login);

router.get('/register', registerController.register);

router.get('/productCart', productCartController.productCart);

module.exports = router;