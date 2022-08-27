const ServicesService = require("../services/services-service");

exports.addServices = async (req, res) => {
  const services = await ServicesService.addServices(req.body);

  res.status(201).json({
    status: "success",
    results: services,
  });
};

exports.getServicesById = async (req, res) => {
  const house_id = req.params.id;

  const service = await ServicesService.getServicesById(house_id);

  res.status(200).json({
    status: "success",
    results: service,
  });
};

exports.updateService = async (req, res) => {
  const _id = req.params.id;

  const service = await ServicesService.updateService(_id, req.body);

  res.status(200).json({
    status: "success",
    results: service,
  });
};
