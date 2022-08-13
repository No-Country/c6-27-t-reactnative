const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.js");

router.get("/list", controller.list);
router.get("/test", controller.test);

module.exports = router;