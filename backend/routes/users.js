const express = require("express");
const router = express.Router();
const logIn = require("../controllers/logInController");
const signUp = require("../controllers/signUpController");

router.post("/signup", signUp);
router.post("/login", logIn);

module.exports = router;
