const db = require("../models");
const Property = db.Property;

// Controller untuk menambah properti baru
exports.create = async (req, res) => {
  try {
    const { name, location, price, description } = req.body;
    const newProperty = await Property.create({
      name,
      location,
      price,
      description,
    });
    res.status(201).json(newProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal menambahkan properti." });
  }
};

// Controller untuk mengambil semua properti
exports.findAll = async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mendapatkan data properti." });
  }
};
