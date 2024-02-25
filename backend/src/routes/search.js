const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const search_controller = require("../controllers/starWars.controller");

router.post("/search", auth, search_controller.search);

module.exports = router;