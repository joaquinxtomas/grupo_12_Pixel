const userController = {
    login: (req,res) => { 
        return res.render('login');
    },
    register: (req,res) => {
        return res.render('register');
    },
    productCart: (req,res) => {
        return res.render('productCart');
    }
}

module.exports = userController;