const User = require('../models/User')

function userLoggedMIddleware(req,res,next){
    res.locals.isLogged=false; //por defecto, se asume que cuando se entra, no hay nadie loggeado.
    
    let emailInCookie=req.cookies.userEmail;
    let userFromCookie=User.findByField('email', emailInCookie)
    //console.log(userFromCookie) //mostrar en consola cada vez que el middleware verifica si hay cookie

    if(userFromCookie){
        req.session.userLogged=userFromCookie;  //si user from cookie, no es undefined, quiere decir que la cookie todavía existe, y tiene un mail loggeado. se le asigna al session.
    }
    if (req.session.userLogged){ //si la session tiene algo, se le mete en las variables locales, para poderlo mostrar por ejs.
        res.locals.isLogged=true
        res.locals.userLogged=req.session.userLogged;
    }


    next();

}

module.exports=userLoggedMIddleware;