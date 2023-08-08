const express = require("express");
const { handleJwt } = require("../../utils/handleJwt");
const { tracking } = require("../../controller/track/tracker");
const trackerRouter = express.Router();

trackerRouter.post("/", handleJwt.verifyToken, tracking);

module.exports = trackerRouter;
