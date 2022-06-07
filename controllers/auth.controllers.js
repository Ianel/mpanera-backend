const [pool] = require("../config/db.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

exports.login = () => {};

exports.register = async (req, res) => {
  const { tel, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query("INSERT INTO users(tel, password) VALUES ($1 , $2)", [tel, hashedPassword]);

    return res.status(201).json({
      success: true,
      message: "Registration successful"
    });

  } catch (error) {
    console.error(error.message);
  }
};

exports.signin = (req, res) => {
  pool
    .query("SELECT * FROM users WHERE tel = ?", [req.body.tel])
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, {
        expiresIn: 86400, // 24 hours
      });
      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
