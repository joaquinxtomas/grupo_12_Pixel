const express = require('express')
const path = require('path')
const app = express()

const rutaMain = require('./src/routers/mainRoutes');
const rutaProduct = require('./src/routers/productRoutes');
const rutaUser = require('./src/routers/userRoutes');

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src/views' ));

app.use('/', rutaMain);

app.use('/user', rutaUser);

app.use('/product', rutaProduct);

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));