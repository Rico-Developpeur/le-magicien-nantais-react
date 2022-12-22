const express = require("express");

const router = express.Router();

const messageControllers = require("../controllers/messageControllers");

router.post("/createMessage", messageControllers.postMessage);

router.post("/mail", messageControllers.email);

module.exports = router;
