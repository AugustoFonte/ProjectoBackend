const express = require('express');
const controller = require('../controllers/products');
const { protect, authorize  } = require('../middleware/auth');
const router = express.Router();



// router
//   .route('/products/:id/photos')
//   .post(protect, authorize('publisher', 'admin'), productPhotoUpload);

router
  .get('/', controller.getProducts)
  .get('/:id', controller.getProduct);
//   .post(protect, authorize('publisher', 'admin'), createProduct);

// router
//   .route('/products/:id')
//   .get(getProduct)
//   .put(protect, authorize('publisher', 'admin'), updateProduct)
//   .delete(protect, authorize('publisher', 'admin'), deleteProduct);

module.exports = router;