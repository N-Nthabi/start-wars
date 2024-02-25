var express = require('express');
require("dotenv").config();
const usersRouter = require("./src/routes/users");
const searchRouter = require("./src/routes/search");

var app = express();
app.use(express.json());
app.use("/auth", usersRouter);
app.use("/star-wars", searchRouter);

app.listen(4000);
