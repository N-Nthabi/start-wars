var express = require('express');
require("dotenv").config();
const usersRouter = require("./src/routes/users");


var app = express();
app.use(express.json());
app.use("/users", usersRouter);


app.listen(4000);
