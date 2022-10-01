const express = require('express');
const router = express.Router();
let mainControllers = require('../controllers/mainCrontrollers');
let loginController = require('../controllers/loginController');
let registerController = require('../controllers/registerCrontroller');
let productCartController = require('../controllers/productCartController');
let addProductController = require('../controllers/addProductController');



router.get('/', mainControllers.index);

router.get('/login', loginController.login);

router.get('/register', registerController.register);

router.get('/productCart', productCartController.productCart);

// router.get("/addProduct", addProductController.add)

module.exports = router;