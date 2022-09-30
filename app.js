const express = require('express')
const path = require('path')
const app = express()

const rutaMain = require('./src/routers/mainRoutes');
const rutaProductDetail = require('./src/routers/productDetailRoutes');

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src/views' ));

app.use('/', rutaMain);

app.use('/login', rutaMain);

app.use('/register', rutaMain);

app.use('/productCart', rutaMain);

app.use('/productDetail', rutaProductDetail);

app.use('/addProduct', rutaProductDetail);

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));