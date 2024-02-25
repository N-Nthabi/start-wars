const jwt = require("jsonwebtoken");
const config = require('../config/config');

module.exports = async (request, response, next) => {
  try {
  
    const token = await request.headers.authorization.split(" ")[1];

    const decodedToken = await jwt.verify(token, config.development.jwtSecret);

    const userId = await decodedToken.userId;
    request.userId = userId;
    next();
    
  } catch (error) {
    response.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};