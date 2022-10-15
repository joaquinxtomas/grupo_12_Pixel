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


router.get('/detail/:id', productController.productDetail);

router.get('/create', productController.productCreate);

//agregar UPLOAD cuando este MULTER
router.post('/create', upload.single("image"), productController.productSave);

router.get('/list', productController.productList);

router.get ('/edit/:id', productController.productEdit);
router.post('/edit/:id', upload.single("foto-user"), productController.productUpdate);

module.exports = router;