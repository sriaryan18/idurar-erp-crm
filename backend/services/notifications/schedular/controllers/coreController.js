const core = require('../coreFeature');

const createSchedularController =   {
    schedule : (Model,req,res) => core(Model,req,res)
}

module.exports = createSchedularController