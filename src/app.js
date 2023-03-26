const server = require('./server')
const connectDB = require('./database/mongodb');
require('dotenv').config();

const mongoDbString = process.env.MONGO_URI;
connectDB(mongoDbString);

const port = process.env.PORT || 5000;

const srv = server.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
});

// Gracefull shutdown: https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server');
    srv.close(() => {
        console.log('http server closed')
    });
});