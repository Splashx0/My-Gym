const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
//LOGIN user

router.post("/login", login);

//REGISTER user

router.post("/register", register);

module.exports = router;
