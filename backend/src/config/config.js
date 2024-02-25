require("dotenv").config();
module.exports = {
    "development": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_DIALECT || 'postgres',
      "saltRounds": Number(process.env.SALT_ROUNDS),
      "jwtSecret": process.env.JWT_SECRET,
      "tokenExpiry": process.env.TOKEN_EXPIRY,
      "cacheTime": Number(process.env.CACHE_TIME)
    },
    "test": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT
    },
    "production": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT
    }
  }
  