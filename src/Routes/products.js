const express = require('express');
const controller = require('../Controllers/products');
const { protect } = require('../Middleware/auth');
const router = express.Router();


router
  .get('/', controller.getProducts)
  .post('/',  protect, controller.createProduct);

router
  .get('/:id', controller.getProduct)
  .put('/:id', protect, controller.updateProduct)
  .delete('/:id', protect, controller.deleteProduct);

module.exports = router;