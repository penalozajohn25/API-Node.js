const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().alphanum().min(3).max(10);
const category = joi.string().min(3).max(10);
const price = joi.number().integer().min(3);
const description = joi.string().min(10).max(100);
const categoryId = joi.number().integer();

const schemaProductCreate = joi.object({
    name: name.required(),
    price: price.required(),
    category: category,
    description: description.required(),
    categoryId: categoryId.required()
});

const schemaProductUpdate = joi.object({
    name: name,
    price: price,
    description: description,
    categoryId: categoryId
});

const schemaProductGet = joi.object({
    id: id.required()
});

module.exports = {
    schemaProductCreate,
    schemaProductUpdate,
    schemaProductGet
}