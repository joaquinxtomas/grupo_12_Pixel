const express = require('express')
const path = require('path')
const app = express()
const methodOverride= require('method-override'); //configuración de PUT y DELETE


const rutaMain = require('./src/routers/mainRoutes');
const rutaProduct = require('./src/routers/productRoutes');
const rutaUser = require('./src/routers/userRoutes');

//use cosas nativas
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src/views' ));

app.use(methodOverride('_method')); //configuración de PUT y DELETE

//use rutas
app.use('/', rutaMain);

app.use('/user', rutaUser);

app.use('/product', rutaProduct);

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));