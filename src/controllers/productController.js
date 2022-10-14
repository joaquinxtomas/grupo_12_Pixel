const fs= require("fs");
const path =require("path");

const productosJSON = fs.readFileSync(path.resolve(__dirname,'../data/productos.json'))
const productos= JSON.parse(productosJSON,{encoding:"utf-8"})
const productsFilePath = path.join(__dirname, '../data/productos.json')


const productController = {

    productDetail: (req, res) => {
        let producto;
        productos.forEach(productoN => { 
            if(productoN.id==req.params.id){
                producto=productoN
            } 
        });
        return res.render('productDetail',{producto});
    },

    productList: (req, res) => {
        return res.render('productList', {productos});
    },
    productCreate : (req,res)=> {
        return res.render('addProduct')
    },

    productEdit:(req,res)=>{
        let producto;
        productos.forEach(productoN => { 
            if(productoN.id==req.params.id){
                producto=productoN
            } 
        });
        return res.render('productEdit',{producto});
    },

    productSave:(req,res)=>{
        let indexMap = productos.map(product => product.id); 

		let newIndex = Math.max(...indexMap) + 1; 

		let productCreated={
			id:newIndex,
			...req.body,
			
		}

        productos.push(productCreated); 

		newProductsJSON = JSON.stringify(productos, { encoding: "utf-8" });
		fs.writeFileSync(productsFilePath, newProductsJSON)

        res.redirect("/product/list")  
    },

    productUpdate:(req,res)=>{
        res.send("holaa")
    }
};

module.exports = productController;