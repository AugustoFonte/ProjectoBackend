const { response } = require('express');
const model = require('../Models/cart');
const asyncHandler = require('../Middleware/async');


// Nodejs + MongoDB usage: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
// @desc      Get all carts
// @route     GET /shopping-carts
// @access    Public
exports.getCarts = asyncHandler(async (req, res, next) => {
  const cart = await model.find();

  data = [];
  cart.forEach((c) => {
    data.push({
      id: c._id,
      userId: c.userId,
      totalPrice: c.totalPrice,
      status: c.status,
      products: c.products,
    });
  });

  res.status(200).json({
    data: data,
    statusCode: 200,
  });
});

// @desc      Get single Cart
// @route     GET /shopping-carts/:id
// @access    Public
exports.getCartByID = asyncHandler(async (req, res, next) => {
  const data = await model.findById(req.params.id);

  if (!data) {
    res.status(404).json({
      message: `No Cart with the id of ${req.params.id}`,
      statusCode: 404,
    });
    return;
  }

  res.status(200).json({
    statusCode: 200,
  });
});

// @desc      Create new Cart
// @route     POST /shopping-carts/
// @access    Private
exports.createCart = asyncHandler(async (req, res, next) => {
    const cart = await model.create(req.body);
  res.status(200).json({
    statusCode: 200,
  });
});


// @desc      Delete Cart
// @route     DELETE /shopping-carts/:id
// @access    Private
exports.deleteCart = asyncHandler(async (req, res, next) => {
  const data = await model.findByIdAndDelete(req.params.id); // https://attacomsian.com/blog/mongoose-delete-documents
  if (!data) {
    res.status(404).json({
      message: `No Cart with the id of ${req.params.id}`,
      statusCode: 404,
    });
    return;
  }
 

  res.status(200).json({
    message: `Deleted Cart ${req.params.id}`,
    statuscode: 200,
  });
});