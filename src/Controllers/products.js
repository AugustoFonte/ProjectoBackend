const { response } = require("express");
const model = require("../Models/product");

// Nodejs + MongoDB usage: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
// @desc      Get all Products
// @route     GET /v1/products
// @access    Public
exports.getProducts = async (req, res) => {
  const products = await model.find();

  data = [];
  products.forEach((p) => {
    data.push({
      id: p.id,
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
};

// @desc      Get single product
// @route     GET /v1/products/:id
// @access    Public
exports.getProduct = async (req, res) => {
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
};

// @desc      Create new product
// @route     POST /v1/products
// @access    Private
exports.createProduct = async (req, res, next) => {
  if(req.body.title === "") {
    res.status(400).json({
      success: false,
      message: `Failed to Create product`,
      statusCode: 400,
    });
    return;
  }
  const product = await model.create(req.body);
  res.status(200).json({
    data: {
      id:"data.id"

    },
    success: true,
    message: "Create new product",
    statusCode: 200,
  });
};

// @desc      Update product
// @route     PUT /api/v1/products/:id
// @access    Private
exports.updateProduct = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Update product ${req.params.id}`,
    statusCode: 200,
  });

  res.status(400).json({
    success: false,
    message: `Failed to update product`,
    statusCode: 400,
  });
};

// @desc      Delete product
// @route     DELETE /v1/products/:id
// @access    Private
exports.deleteProduct = async (req, res, next) => {
  const data = await model.findById(req.params.id);
  if (!data) {
    res.status(404).json({
      message: `No Product with the id of ${req.params.id}`,
      statusCode: 404,
    });
    return;
  }
  data.remove()

  res.status(200).json({
    success: true,
    message: `Delete product ${req.params.id}`,
    statuscode: 200,
  });
};
