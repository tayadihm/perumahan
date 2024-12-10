const express = require("express");
const db = require("./models");
const cors = require("cors"); // Jika Anda perlu menggunakan CORS untuk aplikasi berbasis web
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json()); // Menggunakan built-in express.json() untuk parsing JSON
app.use(express.urlencoded({ extended: true })); // Parsing URL encoded data

// Sinkronisasi database
db.sequelize
  .sync({ force: false }) // Set `force: true` hanya untuk pengembangan, akan menghapus data lama
  .then(() => {
    console.log("Database berhasil disinkronisasi.");
  })
  .catch((err) => {
    console.error("Gagal sinkronisasi database:", err);
  });

// Mengimpor rute
const propertyRoutes = require("./routes/property.routes");
app.use("/api", propertyRoutes); // Mengarahkan rute API ke file routes

// Rute utama
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the housing_profile API." });
});

// Menjalankan server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
