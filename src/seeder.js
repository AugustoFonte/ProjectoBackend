const fs = require('fs');
const connectDB = require('./database/mongodb');
require('dotenv').config();

const mongoDbString = process.env.MONGO_URI;
connectDB(mongoDbString);

// Load models
const Product = require('./Models/product');

// Read JSON files
const productsSeed = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/products.json`, 'utf-8')
);


// Import into DB
const importData = async () => {
  try {
    // use async in foreach
    // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    
    await Promise.all(productsSeed.map(async (p) => {
      const product = new Product({
        id: p.id,
        imageUrl: p.imageUrl,
        title: p.title,
        description: p.description,
        price: p.price,
      })

      await product.save();

    })); 

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Product.deleteMany();

    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}