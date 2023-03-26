
const { response } = require('express');
const model = require('../Models/product');

// Nodejs + MongoDB usage: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
// @desc      Get all Products
// @route     GET /v1/products
// @access    Public
exports.getProducts = async (req, res) => {
   const products = await model.find();
  
   data = []
   products.forEach(p => {
    data.push({
      id: p.id,
      imageUrl: p.imageUrl,
      title: p.title,
      description: p.description,
      price: p.price,
    })
   });

   res.status(200).json({
    data: data,
    statusCode: 200
   });
};

// @desc      Get single product
// @route     GET /v1/products/:id
// @access    Public
exports.getProduct = async (req, res) => {
  const data = await model.findById(req.params.id);

  if (!data) {
    res
      .status(404)
      .json({
        message: `No Product with the id of ${req.params.id}`,
        statusCode: 404,
      });
    return
  }

  res
    .status(200)
    .json({
      data: {
        id: data.id,
        imageUrl: data.imageUrl,
        title: data.title,
        description: data.description,
        price: data.price,
      },
      statusCode: 200
    });
};

//   // @desc      Create new product
//   // @route     POST /api/v1/products
//   // @access    Private
//   exports.createProduct = async (req, res, next) => {
//     res.status(200).json({ success: true, msg: 'Create new product' });
//   };

//   // @desc      Update product
//   // @route     PUT /api/v1/products/:id
//   // @access    Private
//   exports.updateProduct = async (req, res, next) => {
//     res
//       .status(200)
//       .json({ success: true, msg: `Update product ${req.params.id}` });
//   };

//   // @desc      Delete product
//   // @route     DELETE /api/v1/products/:id
//   // @access    Private
//   exports.deleteproduct = async (req, res, next) => {
//     res
//       .status(200)
//       .json({ success: true, msg: `Delete product ${req.params.id}` });
//   };