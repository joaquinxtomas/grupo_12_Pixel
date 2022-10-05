const express = require('express');
const router = express.Router();


let userController = require('../controllers/userController');



router.get('/login', userController.login);

router.get('/register', userController.register);

router.get('/productCart', userController.productCart);



module.exports = router;