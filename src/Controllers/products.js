const { response } = require('express');
const model = require('../Models/product');
const asyncHandler = require('../Middleware/async');

// Nodejs + MongoDB usage: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
// @desc      Get all Products
// @route     GET /v1/products
// @access    Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await model.find();

  data = [];
  products.forEach((p) => {
    data.push({
      id: p._id,
      imageUrl: p.imageUrl,
      title: p.title,
      description: p.description,
      price: p.price,
    });
  });

  res.status(200).json({
    data: data,
    statusCode: 200,
  });
});

// @desc      Get single product
// @route     GET /v1/products/:id
// @access    Public
exports.getProduct = asyncHandler(async (req, res, next) => {
  const data = await model.findById(req.params.id);

  if (!data) {
    res.status(404).json({
      message: `No Product with the id of ${req.params.id}`,
      statusCode: 404,
    });
    return;
  }

  res.status(200).json({
    data: {
      id: data.id,
      imageUrl: data.imageUrl,
      title: data.title,
      description: data.description,
      price: data.price,
    },
    statusCode: 200,
  });
});

// @desc      Create new product
// @route     POST /v1/products
// @access    Private
exports.createProduct = asyncHandler(async (req, res, next) => {
  if(req.body.title === "") {
    res.status(400).json({
      message: `failed to create product, please add a title`,
      statusCode: 400,
    });
    return;
  }
  const product = await model.create(req.body);
  res.status(200).json({
    data: {
      id:product.id,
      imageUrl: product.imageUrl,
      title: product.title,
      description: product.description,
      price: product.price

    },
    statusCode: 200,
  });
});

// @desc      Update product
// @route     PUT /api/v1/products/:id
// @access    Private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const update = await model.findByIdAndUpdate(req.params.id, req.params.body);
    if(!update) {
      res.status(400).json({
        message: `Failed to update product`,
        statusCode: 400,
  })
  };
  
  res.status(200).json({
    message: `Update product ${req.params.id}`,
    statusCode: 200,
  
  });
});

// @desc      Delete product
// @route     DELETE /v1/products/:id
// @access    Private
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const data = await model.findByIdAndDelete(req.params.id); // https://attacomsian.com/blog/mongoose-delete-documents
  if (!data) {
    res.status(404).json({
      message: `No Product with the id of ${req.params.id}`,
      statusCode: 404,
    });
    return;
  }
 

  res.status(200).json({
    message: `Deleted product ${req.params.id}`,
    statuscode: 200,
  });
});