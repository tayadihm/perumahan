const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/property.controller");

// Definisikan rute untuk menambah properti (POST)
router.post("/properties", propertyController.create);

// Definisikan rute untuk mendapatkan semua properti (GET)
router.get("/properties", propertyController.findAll);

module.exports = router;