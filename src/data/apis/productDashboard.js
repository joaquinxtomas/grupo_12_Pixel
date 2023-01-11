const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const Product = db.Product;

const productDashboard = {
    productList: async (req, res) => {
        try {
            var productos = await db.Product.findAll({ include: { all: true } });
            const categorias = await db.Category.findAll({ include: { all: true } });
            // res.send(productos)
            /* const mapped = productos.map(element => ({detail:true ,...element})) */
            var array = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }];

            productos.map(value => value.isApproved = true);

            console.log(productos)

            res.status(200).json(
                {
                    meta: {
                        status: 200,
                        count: productos.length,
                        url: 'api/products'
                    },
                    data: productos

                }
            )
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = productDashboard





