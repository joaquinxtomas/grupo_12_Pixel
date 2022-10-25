const fs= require("fs");
const path =require("path");

const productosJSON = fs.readFileSync(path.resolve(__dirname,"../data/productos.json"))
const productos= JSON.parse(productosJSON,{encoding:"utf-8"})
const mainControllers = {    
    index: (req,res) => {

        console.log("la el email guardado en cookie es " +req.cookies.userEmail) //verifica que la cookie se haya recibido. 

        return res.render('index', { productos });
    }
};

module.exports = mainControllers;