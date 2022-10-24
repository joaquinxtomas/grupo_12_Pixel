const fs = require("fs");
const path = require("path");

const User = {
    fileName: "./src/data/user.json",
    getData:function (){
        return JSON.parse(fs.readFileSync(this.fileName,"utf-8"));
    },

    findAll: function(){
        return this.getData();
    },

    generateId:function(){
        let allUsers=this.findAll();
        let lastUser=allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1
    },

    findByPk:function(id){
        let allUsers=this.findAll();
        let userFound=allUsers.find(unUsuario=>unUsuario.id===id);
        return userFound;    
    },

    findByField:function(field,text){
        let allUsers=this.findAll();
        let userFound=allUsers.find(unUsuario=>unUsuario[field]===text);
        return userFound
    },
    create:function(userData){
        let allUsers=this.findAll();
        delete userData.passwordConfirm;
        let newUser= {
            id:this.generateId(),
            ...userData            
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName,JSON.stringify(allUsers,null,' '));
        return newUser;
    },

    delete: function(id){
        let allUsers=this.findAll();
        let finalUsers = allUsers.filter(unUsuario=>unUsuario.id !== id);
        fs.writeFileSync(this.fileName,JSON.stringify(finalUsers,null," "));
        return true
    }
}

module.exports= User;