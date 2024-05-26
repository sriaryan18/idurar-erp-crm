const dispatchService = require('../serviceLayer/dispatch');

const aggregateAndDispatchController = {
  dispatch: (req, res) => dispatchService(req, res),
};

module.exports = aggregateAndDispatchController;
