const express = require('express');
const servicesClient = require('../services/servicesCategory');
const router = express.Router();
const { getCategorySchema, createCategorySchema, updateCategorySchema } = require('../schema/schemaCategory');
const validatorHandler = require('../middleware/validator.handler');


router.get('/', async (req, res, next) => {
    try {
        const categories = await servicesClient.allCategories(req, res)
        return res.send({ categories })
    } catch (error) {
        next(error)
    }
});


router.get('/:id', validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await servicesClient.oneCategory(id)
            return res.send({ category })
        } catch (error) {
            next(error)
        }
    });


router.post('/', validatorHandler(createCategorySchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const category = await servicesClient.createCategory(body)
            return res.send({ category })
        } catch (error) {
            next(error)
        }
    });


router.patch('/:id',
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const updateCategory = await servicesClient.updateCategory(id, body)
            return res.send({ updateCategory })
        } catch (error) {
            next(error)
        }
    });


router.delete('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const deleteCategory = await servicesClient.deleteCategory(id)
            return res.send({ deleteCategory })
        } catch (error) {
            next(error)
        }
    });


module.exports = router;