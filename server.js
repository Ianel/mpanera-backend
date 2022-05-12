const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: './.env' });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.listen(port, "localhost", (req, res) => {
    console.log(`Server running on port: ${port}`);
});