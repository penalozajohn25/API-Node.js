const express = require('express');
const servicesUsers = require('../services/servicesUsers');
const router = express.Router();
const {createUserSchema, updateUserSchema, getUserSchema} = require('../schema/schemaUser');
const validatorHandler = require('../middleware/validator.handler');

router.get('/', async (req, res, next) => {
    try {
        const users = await servicesUsers.getAllUser(req, res);
        return res.status('200').send(users);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', validatorHandler(getUserSchema, 'params'), async (req, res) => {
    try {
        const { id } = req.params;
        const oneUser = await servicesUsers.getUser(id);
        res.json(oneUser);
    } catch (error) {
        next(error);
    }
})

router.post('/', validatorHandler(createUserSchema, 'body'), async (req, res, next) => {
    try {
        const body = req.body;
        const newUser = await servicesUsers.createUser(body);
        return res.json(newUser);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', validatorHandler(getUserSchema, 'params'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updateUser = await servicesUsers.updateUser({ id, body });
        return res.json(updateUser);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteUser = await servicesUsers.deleteUser(id);
        return res.json(deleteUser);
    } catch (error) {
        next(error);
    }
});


module.exports = router;
