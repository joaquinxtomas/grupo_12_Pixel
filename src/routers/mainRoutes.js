const express = require('express');
const router = express.Router();

let mainControllers = require('../controllers/mainCrontrollers');


router.get('/', mainControllers.index);


module.exports = router;