const express = require('express');
const router = express.Router();
const controller = require('../Controllers/carts');



/* GET /shopping-carts
GET /shopping-carts/:id/checkouts
DELETE /shopping-carts/:id */

router
.get('/shopping-carts', controller.getCarts)
.get('/shopping-carts/:id', controller.getCartByID)
.post ('/shopping-carts', controller.createCart)
.delete('/shopping-carts/:id', controller.deleteCart)

module.exports = router;