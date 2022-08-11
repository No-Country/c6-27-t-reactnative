const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.js");

router.get("/list", controller.list);

module.exports = router;