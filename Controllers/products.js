// @desc      Get all Products
// @route     GET /api/v1/products
// @access    Public
exports.getProducts = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all Products' });
  };

  // @desc      Get single product
  // @route     GET /api/v1/products/:id
  // @access    Public
  exports.getProduct = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Show product ${req.params.id}` });
  };

  // @desc      Create new product
  // @route     POST /api/v1/products
  // @access    Private
  exports.createProduct = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new product' });
  };

  // @desc      Update product
  // @route     PUT /api/v1/products/:id
  // @access    Private
  exports.updateProduct = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Update product ${req.params.id}` });
  };

  // @desc      Delete product
  // @route     DELETE /api/v1/products/:id
  // @access    Private
  exports.deleteproduct = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Delete product ${req.params.id}` });
  };