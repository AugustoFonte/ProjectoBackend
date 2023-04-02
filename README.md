# STORE API
API for e-commerce

# How to Clone
```js
git clone https://github.com/AugustoFonte/ProjectoBackend.git
```

# How to install?
```js
npm start
```

# How to seed 
```js
npm run seed
```

# How to delete the seed
```js
npm run delete 
```

## Project Directories

```
.
├── _data    	  # Contains json datas
	└── carts 	  # Contains the carts data
    └── users 	  # Contains the users data
    └── products  # Contains the products data

├── Controllers	  # Contains the controllers logic
    └── carts 	  # Contains the carts functions  
    └── auth 	  # Contains the auth functions
    └── products  # Contains the products controller

├── database      # Contains mongoDB connections logic
	
├── Middleware	  # Contains the functions that work between request and app
	└── async     # Contains the async middle functions
    └── auth      # Contains the auth middle functions

├── Models	      # Contains the models of the Schema 
	└── Carts     # Contains the cart Schema
    └── Products  # Contains the products Schema
    └── auth      # Contains the auth Schema

├── Routes	      # Contains the routes 
	└── Carts     # Carts routes
    └── Products  # Products routes
    └── auth      # Auth routes

├── Utils         # Contains utils files
```

# API Documentation

```
http://localhost:3001/doc
```

# Sources of information
- Gracefull shutdown: https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357
- Swagger https://medium.com/swlh/automatic-api-documentation-in-node-js-using-swagger-dd1ab3c78284
-  Use async in foreach https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
- uuid v4: https://www.uuidgenerator.net/version4 - id in products.json obtained from site
- Nodejs + MongoDB usage: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
- Logger https://reflectoring.io/node-logging-winston/