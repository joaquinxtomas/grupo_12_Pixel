const fs=require("fs")
const usuarios = [{
    fullName:"roberto carlos",
    username:"robertocar",
    email:"juancarlos@perez.com",
    dateOfBirth:"15/12/1998",
    address:"calle falsa 123",
    password:"123456asd",
    passwordConfirm:"123456asd",
    userImg:"default.jpg",
    //category:"vendedor"
}]
usuariosJson=JSON.stringify(usuarios,{encoding:"utf-8"})
fs.writeFileSync("./user.json",usuariosJson)
console.log(usuariosJson)