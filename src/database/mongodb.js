const mongoose = require('mongoose');
const logger = require("./logger");
const database = mongoose.connection

const connectDB = async (mongoDbString) => {
  const conn = await mongoose.connect(mongoDbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  logger.info(`MongoDB Connected: ${conn.connection.host}`);
};

database.on('error', (error) => {
  logger.error(error);
});

database.once('connected', () => {
  logger.info('database connected');
});

module.exports = connectDB;