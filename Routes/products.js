const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  productPhoto
} = require('../controllers/Products');


const product = require('../models/product');

const productRouter = require('./product');

const router = express.Router();

// Re-route into other resource routers
router.use('/products/product', productRouter);

router.route('/:id/photo').put(protect, authorize('publisher', 'admin'),productPhoto);

router
  .route('/')
  .get(advancedResults(products, 'product'), getProducts)
  .post(protect, authorize('publisher', 'admin'),createProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(protect, authorize('publisher', 'admin'),updateProduct)
  .delete(protect, authorize('publisher', 'admin'),deleteProduct);

module.exports = router;