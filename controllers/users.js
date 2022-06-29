const UserServices = require("../services/users-services");

exports.getAllUsers = async (req, res) => {
  const { users, nbOfUsers } = await UserServices.getAllUsers();

  res.status(200).json({
    status: "success",
    itemCount: nbOfUsers,
    results: users,
  });
};

exports.getUser = async (req, res) => {
  const _id = req.params.id;

  const user = await UserServices.getUser(_id);

  res.status(200).json({
    status: "success",
    results: user,
  });
};
