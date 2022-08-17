const { getUserDb, getAllUsersDb, updateUserDb } = require("../db/users.db");

class UserServices {
  async getAllUsers() {
    const { users, nbOfUsers } = await getAllUsersDb();

    return { users, nbOfUsers };
  }

  async getUser(id) {
    const user = await getUserDb(id);

    return user;
  }

  async updateUser(id, data) {
    const updatedUser = await updateUserDb(id, data);

    return updatedUser;
  }
}

module.exports = new UserServices();
