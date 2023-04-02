const fs = require('fs');
const connectDB = require('./database/mongodb');
require('dotenv').config();
const mongoose = require('mongoose');
const logger = require("./logger");

const mongoDbString = process.env.MONGO_URI;
connectDB(mongoDbString);

// Load models
const Product = require('./Models/products');
const Users = require('./Models/user');
const Carts = require('./Models/carts');

// Read JSON files
const productsSeed = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/products.json`, 'utf-8')
);
const userSeed = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);
const cartsSeed = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/carts.json`, 'utf-8')
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
    await Promise.all(userSeed.map(async (u) => {
      const user = new Users({
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
        password: u.password,
      })

      await user.save();

    })); 

    await Promise.all(cartsSeed.map(async (c) => {
      const carts = new Carts({
        id: c.id,
        userId: c.userId,
        totalPrice: c.totalPrice,
        status: c.status,
        products: c.products,
      })

      await carts.save();

    })); 

    logger.info('Data Imported...');
    process.exit();
  } catch (err) {
    logger.error(err);4
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Product.deleteMany();
    await Users.deleteMany();
    await Carts.deleteMany();
    

    logger.info('Data Destroyed...');
    process.exit();
  } catch (err) {
    logger.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}