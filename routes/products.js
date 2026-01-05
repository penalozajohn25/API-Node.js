const express = require('express');
const productService = require('../services/servicesProducts');
const router = express.Router();
const validatorHandler = require('../middleware/validator.handler');
const { schemaProductCreate, schemaProductUpdate, schemaProductGet } = require('../schema/schemaProduct');

router.get('/', async (req, res, next) => {
  try {
    const products = await productService.getAllProducts(req, res);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(schemaProductGet, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await productService.getOneProduct(id);
      res.json(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })

router.post('/', validatorHandler(schemaProductCreate, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const createProduct = await productService.createNewProduct(body);
      res.json(body);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.patch('/:id', validatorHandler(schemaProductGet, 'params'), validatorHandler(schemaProductUpdate, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const patchProduct = await productService.updateProduct(id, body);
      res.json(body);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.put('/:id', validatorHandler(schemaProductUpdate, 'params'), async (req, res) => {
  const updateProduct = await productService.updateProductPartial(req, res);
  return updateProduct;
});

router.delete('/:id', validatorHandler(schemaProductGet, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteProduct = await productService.deleteProduct(id);
      res.json({
        message: 'Product Deleted',
        id
      });
    } catch (error) {
      next(error);
    }
  });


module.exports = router;
