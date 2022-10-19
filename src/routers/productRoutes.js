const express = require('express');
const router = express.Router();
const path=require('path');
const multer=require('multer');

let productController = require('../controllers/productController');

//MULTER

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.resolve(__dirname,"../../public/img"))
    },
    filename:function(req,file,cb){
        cb(null, "PRODUCTO" + Date.now()+path.extname(file.originalname))
    }
})

const upload = multer ({storage});

router.get('/list', productController.productList);

router.get('/detail/:id', productController.productDetail);

//route get create form
router.get('/create', productController.productCreate);
//store new product
router.post('/create', upload.single("image"), productController.productSave); //multer middleware


//route get edit form
router.get ('/edit/:id', productController.productEdit);
//update product
router.put('/edit/:id', upload.single("image"), productController.productUpdate); //multer middleware


module.exports = router;