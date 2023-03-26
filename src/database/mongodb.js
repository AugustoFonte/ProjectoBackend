const mongoose = require('mongoose');

const database = mongoose.connection

const connectDB = async (mongoDbString) => {
  const conn = await mongoose.connect(mongoDbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('database connected');
});

module.exports = connectDB;