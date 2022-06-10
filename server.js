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
app.use(express.json());
app.use(cors());

// Routes Handler
const authRoutes = require("./routes/auth");
const housesRoutes = require("./routes/houses");

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/houses", housesRoutes);

// Server connection
app.listen(port, "localhost", (req, res) => {
  console.log(`Server running on port: ${port}`);
});
