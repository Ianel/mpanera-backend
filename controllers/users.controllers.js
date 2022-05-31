// Database connection
const [pool] = require("../config/db.config");

exports.getUser = (req, res) => {
  const _id = req.params.id;

  pool.query("SELECT * FROM users WHERE id = ?", [_id]).then((user) =>
    res
      .json({
        status: "success",
        payload: user.rows,
      })
      .catch((error) => console.error(error))
  );
};

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
    .catch((error) => console.error(error));
};

exports.updateUser = (req, res) => {
  const updatedData = req.body;
};

exports.deleteUser = (req, res) => {
  const _id = req.params.id;

  pool
    .query("DELETE FROM users WHERE id = ?", [_id])
    .then((user) => res.json({ status: "success", payload: user.rows }))
    .catch((error) => console.error(error));
};
