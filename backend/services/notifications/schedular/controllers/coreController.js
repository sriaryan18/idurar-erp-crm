const coreService = require('../serviceLayer/coreService');

const createSchedularController = {
  save: (Model, req, res) => coreService(Model, req, res),
};

module.exports = createSchedularController;
