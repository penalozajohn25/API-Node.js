const faker = require('faker');
const boom = require('@hapi/boom');
const pool = require('../libs/sequelize');
const { models } = require('../libs/sequelize');


// getAllProducts = (req, res) => {
//     try {
//         const products = [];
//         const { size } = req.query;
//         const limit = size || 5;

//         for (let index = 0; index < limit; index++) {
//             products.push({
//                 id: index + 1,
//                 name: faker.commerce.productName(),
//                 price: parseInt(faker.commerce.price()),
//                 image: faker.image.imageUrl()
//             });
//         }
//         return products;
//     } catch (error) {
//         console.log(error)
//     }
// }

getAllProducts = async (req, res) => {
    try {
        const data = await models.Product.findAll({
            include: ['category']
        });
        return {
            data
        }
    } catch (error) {
        console.log(error)
    }
}

getOneProduct = (id) => {
    try {
        const product = models.Product.findByPk(id, {
            include: ['category']
        });
        if (!product) {
            return {
                error: 'product not found'
            }
        }
        return product;
    }
    catch (error) {
        console.log(error)
    }
}


createNewProduct = async (body) => {
    try {
        const newProduct = await models.Product.create(body);
        return newProduct;
    } catch (error) {
        console.log(error);
    }
}

updateProductPartial = (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        res.json({
            message: "success",
            product: body,
            id
        });
    } catch (error) {
        console.log(error)
    }
}

updateProduct = async (id, body) => {
    try {
        const product = await models.Product.findByPk(id);
        if (!product) {
            return {
                error: 'product not found'
            }
        }
        const response = await product.update(body);
        return response;
    } catch (error) {
        console.log(error)
    }
}

deleteProduct = async (id) => {
    try {
        const product = await models.Product.findByPk(id);
        const deleteProduct = await product.destroy();
        return deleteProduct;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateProductPartial,
    updateProduct,
    deleteProduct
}