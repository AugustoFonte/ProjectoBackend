const { response } = require('express');
const model = require('../Models/carts');
const userModel = require('../Models/user');
const asyncHandler = require('../Middleware/async');


// Nodejs + MongoDB usage: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
// @desc      Get all carts
// @route     GET /shopping-carts
// @access    Public
exports.getCarts = asyncHandler(async (req, res, next) => {
        // #swagger.tags = ['Carts']
        // #swagger.description = 'Endpoint para obter todos os carrinhos.'
  const carts = await model.find();

  data = [];
  carts.forEach((c) => {
    productsList = []
    c.products.forEach((p) => {
      productsList.push({
        id: p._id,
        imageUrl: p.imageUrl,
        title: p.title,
        description: p.description,
        price: p.price,
      });
    }); 
    data.push({
      id: c._id,
      userId: c.userId,
      totalPrice: c.totalPrice,
      status: c.status,
      products: productsList,
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

          // #swagger.tags = ['Cart']
        // #swagger.description = 'Endpoint para obter um único carrinho por ID.'

  const data = await model.findById(req.params.id);
  

  if (!data) {
    res.status(404).json({
      message: `No Cart with the id of ${req.params.id}`,
      statusCode: 404,
    });
    return;
  }
  productsList = []
    data.products.forEach((p) => {
      productsList.push({
        id: p._id,
        imageUrl: p.imageUrl,
        title: p.title,
        description: p.description,
        price: p.price,
      });
    }); 
  res.status(200).json({
    statusCode: 200,
    data: {
    id: data._id,
    userId: data.userId,
    totalPrice: data.totalPrice,
    status: data.status,
    products: productsList
    }
  });
});

// @desc      Create new Cart
// @route     POST /shopping-carts/
// @access    Private
exports.createCart = asyncHandler(async (req, res, next) => {

        // #swagger.tags = ['creatCart']
        // #swagger.description = 'Endpoint para criar um novo carrinho.'

  if(req.body.userId === "") {
    res.status(400).json({
      message: `failed to create cart, cannot link user to cart`,
      statusCode: 400,
    });
    return;
  }
  const user = await userModel.findById(req.body.userId)
  if(!user) {
    res.status(400).json({
      message: `failed to create cart, user does not exist`,
      statusCode: 400,
    });
    return;
  }
    const cart = await model.create(req.body);
  res.status(200).json({
    statusCode: 200,
    data: cart
  });
});


// @desc      Delete Cart
// @route     DELETE /shopping-carts/:id
// @access    Private
exports.deleteCart = asyncHandler(async (req, res, next) => {

        // #swagger.tags = ['deleteCart']
        // #swagger.description = 'Endpoint para apagar um carrinho pelo seu ID.'

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