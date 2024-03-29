const express = require("express");
const router = express.Router();

const auth_controller = require("../controllers/auth.controller");

router.post("/signup", auth_controller.signup);
router.post("/login", auth_controller.login);

module.exports = router;