const asyncHandler = require("express-async-handler");
const db = require('../models/index');
const bcrypt = require("bcrypt");
const config = require('../config/config');
const jwt = require("jsonwebtoken");


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
    res.status(400).send({"message": 'Failed to create a user.', "trace": e});
   }

  res.send({"success": true});
});

exports.login = asyncHandler(async (req,res,next) => {
    const loginBody = req.body;

    if(!loginBody.email || !loginBody.password) {
        res.status(400).send('Failed to log you in.');
    }

    try{
    
        const user = await db.User.findOne({where: {email: loginBody.email}});        

        if(!user){
            res.status(404).send({"message": 'User does not exist please signup.'});
        }
        

        const passwordCheck = await bcrypt.compare(loginBody.password, user.password);

        if(!passwordCheck){
            res.status(400).send({"message": 'User email or password is incorrect.'});
        }

        const token = jwt.sign({
            userId: user.id,
    
        }, config.development.jwtSecret, {expiresIn: config.development.tokenExpiry});

        res.status(200).send({
            message: "Login Successful",
            token,
          });


    }catch(e){
        res.status(400).send({"message": 'Failed to login a user.', "trace": e});
    }
})
