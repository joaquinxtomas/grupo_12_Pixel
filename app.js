const express = require('express')
const path = require('path')
const rutaMain = require('./src/routers/main');
const app = express()
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src/views' ));

app.use('/', rutaMain);

app.use('/login', rutaMain);

app.use('/register', rutaMain);

app.use('/productCart', rutaMain);

app.use('/productDetail', rutaMain);

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));