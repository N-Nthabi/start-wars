const express = require("express");
const router = express.Router();

const auth_controller = require("../controllers/auth.controller");

router.post("/auth/signup", auth_controller.signup);

module.exports = router;