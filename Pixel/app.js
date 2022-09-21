const express=require('express')
const path=require('path')

const app=express()

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/', (req,res) => {
       res.sendFile(path.resolve(__dirname,'./src/views/index.html'))
})

app.get('/productCart', (req,res) => {
       res.sendFile(path.resolve(__dirname,'./src/views/productCart.html'))
})
app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./src/views/login.html'))
})
   app.post('/login', (req,res)=>{
       res.redirect('/');
   });
   app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));

   app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
