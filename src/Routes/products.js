const express = require('express');
const controller = require('../Controllers/products');
const router = express.Router();


router
  .get('/', controller.getProducts)
  .post('/', controller.createProduct);

router
  .get('/:id', controller.getProduct)
  .put('/:id',  controller.updateProduct)
  .delete('/:id', controller.deleteProduct);

module.exports = router;