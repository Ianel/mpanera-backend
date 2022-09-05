const {
  createHouseDb,
  getHouseByIdDb,
  getAllHousesDb,
  getHousesByCityNameDb,
  deleteHouseDb,
  updateHouseDb,
  markHouseAsActiveDb,
} = require("../db/houses.db");

class HouseService {
  async createHouse(data) {
    const house = await createHouseDb(data);

    return house;
  }

  async getHouse(id) {
    const house = await getHouseByIdDb(id);

    return house;
  }

  async getHousesByCityName(city) {
    const { houses, nbOfHouses } = await getHousesByCityNameDb(city);

    return { houses, nbOfHouses };
  }

  async getAllHouses() {
    const { houses, nbOfHouses } = await getAllHousesDb();

    return { houses, nbOfHouses };
  }

  async deleteHouses(id) {
    const house = await deleteHouseDb(id);

    return house;
  }

  async updateHouse(id, data) {
    const house = await updateHouseDb(id, data);

    return house;
  }

  async markHouseAsActive(id, data) {
    const house = await markHouseAsActiveDb(id, data);

    return house;
  }
}
module.exports = new HouseService();
