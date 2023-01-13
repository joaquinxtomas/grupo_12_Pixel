const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const Product = db.Product;

const productDashboard = {
    sqlSearch:'select categorias.nombre, count(*) as "total" from products inner join categorias on categoriaId=categorias.id group by categorias.nombre',
    productList: async (req, res) => {
        
        try {
            var productos = await db.Product.findAll({ include: { all: true } });
            // const categorias = await db.Category.findAll({ include: { all: true } });
            // let newProducts = productos.map(element => ({...element, detail:`product/api/detail/${element.id}`}));

            // SQL search to count by category


            const categorias = await db.sequelize.query(productDashboard.sqlSearch, {type: sequelize.QueryTypes.SELECT})  


            console.log(categorias)

            res.status(200).json(
                {
                    meta: {
                        status: 200,
                        count: productos.length,
                        countByCategory: categorias,
                        url: 'api/products'
                    },
                    data: {
                        products:productos
                    }

                }
            )
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = productDashboard