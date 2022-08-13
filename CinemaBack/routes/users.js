const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.js");

const { body, checkSchema } = require("express-validator");

// Validaciones login
const loginValidations = [
    body("username").notEmpty().withMessage("Debes completar el campo"),
    body("password").notEmpty().withMessage("Debes completar el campo"),
  ];

router.get("/list", controller.list);
router.get("/test", controller.test);
router.post("/login", loginValidations, controller.processLogin);

module.exports = router;