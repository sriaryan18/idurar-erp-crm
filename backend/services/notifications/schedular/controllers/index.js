const mongoose = require('mongoose');

const coreController = require('./coreController');
function modelController() {
  let methods = {};
  const modelName = 'Notification';
  const Model = mongoose.model(modelName);
  methods.save = (req, res) => coreController.save(Model, req, res);
  return methods;
}

module.exports = modelController();
