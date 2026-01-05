const { boom } = require('@hapi/boom')
// const getConnection = require('../libs/postgres')
const { models } = require('../libs/sequelize')

const allCategories = async () => {
    try {
        const categories = await models.Category.findAll()
        return categories
    }
    catch (error) {
        console.log(error)
    }
}

const oneCategory = async (id) => {
    try {
        const category = await models.Category.findByPk(id)
        return category
    }
    catch (error) {
        console.log(error)
    }
}


const createCategory = async (body) => {
    try {
        const newCategory = await models.Category.create(body);
        return newCategory
    } catch (error) {
        console.log(error);
        return false;
    }
}

const updateCategory = async (id, body) => {
    try {
        const categoryUpdate = await models.Category.findByPk(id)
        if (!categoryUpdate) {
            return {
                error: 'category not found'
            }
        }
        const response = await categoryUpdate.update(body)
        return { response }
    }
    catch (error) {
        console.log(error)
    }
}

const deleteCategory = async (id) => {
    try {
        const categoryDelete = await models.Category.delete(id)
        return {
            categoryDelete,
            id
        };
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    allCategories,
    oneCategory,
    createCategory,
    updateCategory,
    deleteCategory
}

