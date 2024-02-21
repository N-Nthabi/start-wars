const asyncHandler = require("express-async-handler");
const db = require('../models/index');
const bcrypt = require("bcrypt");
const config = require('../config/config');


exports.signup = asyncHandler(async (req, res, next) => {
    const userBody = req.body;

    if(!userBody.email || !userBody.name || !userBody.password) {
        res.status(400).send('Failed to Sign you up.');
    }

   try {
    const hasedPassword = await bcrypt.hash(userBody.password, config.development.saltRounds);
    const user = await db.User.create({
        name: userBody.name,
        password: hasedPassword,
        email: userBody.email
    });
   } catch(e) {
    console.log(e);
    res.status(400).send('Failed to create a user.');
   }

  res.send({"success": true});
});
