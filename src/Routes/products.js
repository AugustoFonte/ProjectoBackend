const express = require('express');
const controller = require('../controllers/products');
const { protect, authorize  } = require('../middleware/auth');
const router = express.Router();



// router
//   .route('/products/:id/photos')
//   .post(protect, authorize('publisher', 'admin'), productPhotoUpload);

router
  .get('/', controller.getProducts)
  .post('/', controller.createProduct);

router
  .get('/:id', controller.getProduct)
  .put('/:id',controller.updateProduct)
  .delete('/:id', controller.deleteProduct);

module.exports = router;