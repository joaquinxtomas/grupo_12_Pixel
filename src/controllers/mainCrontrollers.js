const fs= require("fs");
const path =require("path");

const productosJSON = fs.readFileSync(path.resolve(__dirname,"../data/productos.json"))
const productos= JSON.parse(productosJSON,{encoding:"utf-8"})
const mainControllers = {    
    index: (req,res) => {
        return res.render('index', { productos });
    }
};

module.exports = mainControllers;