// Third-party Modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Reference environment variables
dotenv.config({ path: ".env" });

// Set Express and Port
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const usersRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");
const housingRoutes = require("./routes/houses.routes");

// Routes
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/houses", housingRoutes);

// Server connection
app.listen(port, "localhost", (req, res) => {
  console.log(`Server running on port: ${port}`);
});
