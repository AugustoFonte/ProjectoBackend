const express = require('express');
const controller = require('../controllers/products');
const { protect, authorize  } = require('../middleware/auth');
const router = express.Router();



// router
//   .route('/products/:id/photos')
//   .post(protect, authorize('publisher', 'admin'), productPhotoUpload);

router
  .get('/', controller.getProducts)
  .get('/:id', controller.getProduct)
  .post('/:id', authorize('publisher', 'admin'), controller.createProduct);

router
.route('/:id')
.get(controller.getProduct)
.put(protect, authorize('publisher', 'admin'), controller.updateProduct)
.delete(protect, authorize('publisher', 'admin'), controller.deleteProduct);

module.exports = router;