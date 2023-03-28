const express = require('express');
const controller = require('../controllers/products');
const { protect, authorize  } = require('../middleware/auth');
const router = express.Router();



// router
//   .route('/products/:id/photos')
//   .post(protect, authorize('publisher', 'admin'), productPhotoUpload);

router
.route('/')
  .get(controller.getProducts)
  .post(controller.createProduct);

router
.route('/:id')
  .get(controller.getProduct)
  .put(controller.updateProduct)
  .delete(controller.deleteProduct);

module.exports = router;