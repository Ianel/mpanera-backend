const {
  addServicesDb,
  getServicesByIdDb,
  updateServicesDb,
} = require("../db/services.db");

class ServicesService {
  async addServices(data) {
    const services = await addServicesDb(data);

    return services;
  }

  async getServicesById(house_id) {
    const service = await getServicesByIdDb(house_id);

    return service;
  }

  async updateService(id, services) {
    const service = await updateServicesDb(id, services);

    return service;
  }
}

module.exports = new ServicesService();
