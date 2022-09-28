const mainControllers = {
    index: (req,res) => {
        return res.render('rutamain.index');
    },
    login: (req,res) => {
        return res.render('rutamain.login');
    },
    register: (req,res) => {
        return res.render('rutamain.register');
    },
    productCart: (req,res) => {
        return res.render('rutamain.productCart');
    },
    productDetail: (req,res) => {
        return res.render('rutamain.productDetail');
    },
    
};

module.exports = mainControllers;