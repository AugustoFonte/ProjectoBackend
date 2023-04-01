const express = require('express');
const router = express.Router();
const controller = require('../Controllers/carts');



/* GET /shopping-carts
GET /shopping-carts/:id/checkouts
DELETE /shopping-carts/:id */

router
.get('/', controller.getCarts)
.get('/:id', controller.getCartByID)
.post ('/', controller.createCart)
.delete('/:id', controller.deleteCart)

module.exports = router;