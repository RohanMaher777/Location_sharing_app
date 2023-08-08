const { createUser } = require("../../controller/user/user.controller");
const express = require("express");
const userRouter = express.Router()

userRouter.post("/", createUser);

module.exports = userRouter
