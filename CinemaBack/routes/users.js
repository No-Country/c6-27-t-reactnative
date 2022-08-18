const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.js");

const { body, checkSchema } = require("express-validator");

// Validaciones login
const loginValidations = [
    body("username").notEmpty().withMessage("Debes completar el campo"),
    body("password").notEmpty().withMessage("Debes completar el campo"),
  ];

const registerValidations = [
    body("username").notEmpty().withMessage("Debes completar el campo"),
    body("password").notEmpty().withMessage("Debes completar el campo"),
    body("roleId").notEmpty().withMessage("Debes completar el campo"),
  ];

const updateValidations = [
    body("userId").notEmpty().withMessage("Debes completar el campo"),    
    body("username").notEmpty().withMessage("Debes completar el campo"),    
    body("roleId").notEmpty().withMessage("Debes completar el campo"),
  ];

const deleteValidations = [
    body("userId").notEmpty().withMessage("Debes completar el campo"),
  ];

router.get("/list", controller.list);
router.get("/test", controller.test);
router.post("/login", loginValidations, controller.login);
router.post("/create", registerValidations, controller.create);
router.put("/update", updateValidations, controller.update);
router.delete("/delete", deleteValidations, controller.delete);

module.exports = router;