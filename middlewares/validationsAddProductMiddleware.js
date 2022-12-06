const {body}=require("express-validator");

const validationsAddProduct = [
    body('titulo').notEmpty().withMessage(" Debes ingresar un nombre del producto"),
    body('descripcionCorta').notEmpty().withMessage(" Debes ingresar una descripción corta"),
    body('longDesc').notEmpty().withMessage(" Debes ingresar una descripción detallada"),
    body('categoria').notEmpty().withMessage(" Debes ingresar una categoría"),
    body('precio').notEmpty().withMessage(" Debes ingresar una valor"),
    body('descuento').optional({checkFalsy: true}).isInt({min:0,max:100}).withMessage(" Debes ingresar una valor entre 0 y 100") //.optional({checkFalsy: true}) permite que el campo esté vacio, si tiene números, verifica.
]

module.exports=validationsAddProduct;