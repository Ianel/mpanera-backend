const { addServicesDb, getServicesByIdDb } = require("../db/services.db");

class ServicesService {
  async addServices(data) {
    const services = await addServicesDb(data);

    return services;
  }

  async getServicesById(house_id) {
    const service = await getServicesByIdDb(house_id);

    return service;
  }
}

module.exports = new ServicesService();
