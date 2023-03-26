const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  productPhotoUpload
} = require('../controllers/products');

const product = require('../models/product');
const { protect, authorize  } = require('../middleware/auth');
const router = express.Router();

router
  .route('/products/:id/photos')
  .post(protect, authorize('publisher', 'admin'), productPhotoUpload);

router
  .route('/products')
  .get(product, getProducts)
  .post(protect, authorize('publisher', 'admin'), createProduct);

router
  .route('/products/:id')
  .get(getProduct)
  .put(protect, authorize('publisher', 'admin'), updateProduct)
  .delete(protect, authorize('publisher', 'admin'), deleteProduct);

module.exports = router;