const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  productPhotoUpload
} = require('../controllers/Products');


const product = require('../models/product');
const { protect, authorize  } = require('../middleware/auth');
const router = express.Router();


router.route('/:id/photo').put(protect, authorize('publisher', 'admin'), productPhotoUpload);

router
  .route('/')
  .get(advancedResults(product, 'product'), getProducts)
  .post(protect, authorize('publisher', 'admin'), createProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(protect, authorize('publisher', 'admin'), updateProduct)
  .delete(protect, authorize('publisher', 'admin'), deleteProduct);

module.exports = router;