const express = require("express");
const router = express.Router();
const controller = require("../controllers/films.js");

router.get("/list", controller.list);

module.exports = router;