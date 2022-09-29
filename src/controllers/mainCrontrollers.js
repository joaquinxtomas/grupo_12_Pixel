const mainControllers = {
    
    index: (req,res) => {
        return res.render('index');
    },
    login: (req,res) => {
        return res.render('login');
    },
    register: (req,res) => {
        return res.render('register');
    },
    productCart: (req,res) => {
        return res.render('productCart');
    },
    productDetail: (req,res) => {
        return res.render('productDetail');
    },

};

module.exports = mainControllers;