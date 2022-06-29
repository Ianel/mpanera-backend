const { getUserDb, getAllUsersDb } = require("../db/users.db");

class UserServices {
  async getAllUsers() {
    const { users, nbOfUsers } = await getAllUsersDb();

    return { users, nbOfUsers };
  }

  async getUser(id) {
    const user = await getUserDb(id);

    return user;
  }
}

module.exports = new UserServices();
