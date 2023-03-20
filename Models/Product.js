const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a Product title']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  price: {
    type: String,
    required: [true, 'Please add price']
  },
  products: {
    type: mongoose.Schema.ObjectId,
    ref: 'products',
    required: true
  }
});

module.exports = mongoose.model('products', productSchema);
