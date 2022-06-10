const HouseService = require("../services/houses-services");

exports.createHouse = async (req, res) => {
  const house = await HouseService.createHouse(req.body);

  res.status(201).json({
    status: "success",
    results: house,
  });
};

exports.getHouse = async (req, res) => {
  const _id = req.params.id;

  const house = await HouseService.getHouse(_id);

  res.status(200).json({
    status: "success",
    results: house,
  });
};

exports.getAllHouses = async (req, res) => {
  const { houses, nbOfHouses } = await HouseService.getAllHouses();

  res.status(200).json({
    status: "success",
    itemCount: nbOfHouses,
    results: houses,
  });
};

exports.updateHouse = async (req, res) => {
  const _id = req.params.id;
  const house = await HouseService.updateHouse(_id, req.body);

  res.status(200).json({
    status: "success",
    results: house,
  });
};

exports.deleteHouse = async (req, res) => {
  const _id = req.params.id;

  const house = await HouseService.deleteHouses(_id);

  res.status(200).json({
    status: "success",
    results: house,
  });
};
