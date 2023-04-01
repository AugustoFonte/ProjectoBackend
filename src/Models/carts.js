const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({

    _id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        auto: true,
      },
      userId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        },
      
      totalPrice: {
        type: String,
      },

      status: {
        type: String,
        required: true,
        enum: [
          'Checked out',
          'Pending',
        ]
      },
      products: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'products',
        
      }]
    });
    
    module.exports = mongoose.model('shopping-carts', cartSchema);
    

