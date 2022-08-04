// Third-party Modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

// Reference environment variables
dotenv.config({ path: ".env" });

// Set Express and Port
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set static folder
app.use(express.static("public"));

// Utilisation any amin'ny front => http://localhost:4000/anaran'ilay image anaty dossier public / Exemple: http://localhost:4000/1658734441910maison-14.png


app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Routes Handler
const authRoutes = require("./routes/auth");
const housesRoutes = require("./routes/houses");
const usersRoutes = require("./routes/users");
const imageRoutes = require("./routes/images");

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/houses", housesRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/images", imageRoutes);
app.use(express.static(path.join(__dirname, "./public")));
//app.use("/public", express.static("public"));

// Server connection
app.listen(port, "localhost", (req, res) => {
  console.log(`Server running on port: ${port}`);
});
