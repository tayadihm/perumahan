require("dotenv").config();

module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "app_user",
  PASSWORD: process.env.DB_PASSWORD || "app_password",
  DB: process.env.DB_NAME || "housing_profile",
  DIALECT: "postgres",
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
