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
        _id: {
          type: mongoose.Schema.Types.ObjectId,
        },
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        price: {
          type: String,
        },
        imageUrl: {
          type: String,
        }
      }]
    });
    
    module.exports = mongoose.model('shopping-carts', cartSchema);
    

