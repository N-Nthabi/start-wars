var express = require('express');
require("dotenv").config();
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(4000, function() {
    console.log('hey', process.env.DB_DIALECT);
});
