// Database connection
const [pool] = require("../config/db.config");

exports.getUser = () => {};

exports.getAllUsers = (req, res) => {
  pool
    .query("SELECT * FROM users;")
    .then((users) =>
      res.json({
        status: "success",
        itemCount: users.rowCount,
        payload: users.rows,
      })
    )
    .catch((error) => console.error(error))
    .finally(() => console.log("END OF REQUEST"));
};

exports.updateUser = () => {};

exports.deleteUser = () => {};
