const express = require("express");
const { signUp, signIn } = require("../controllers/userController");
const userRoutes = express();

userRoutes.post("/signUp", signUp);
userRoutes.post("/signIn", signIn);

module.exports = userRoutes;