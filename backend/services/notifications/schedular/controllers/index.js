const mongoose = require('mongoose');
require('../models/Notifications');

const coreController = require('./coreController');
function modelController(){
    let methods = {};
    const modelName = 'Notification';
    const Model = mongoose.model(modelName);
    methods.schedule = (req,res) => coreController.schedule(Model,req,res)
    return methods;
}

module.exports = modelController();