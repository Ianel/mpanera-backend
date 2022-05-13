const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: './.env' });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

const usersRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes');
const housingRoutes = require('./routes/housing.routes');

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/housing', housingRoutes);

app.listen(port, "localhost", (req, res) => {
    console.log(`Server running on port: ${port}`);
});