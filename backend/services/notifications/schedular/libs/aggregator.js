const kafkaClient = require('../../../../kafka/client');
const producer = require('../../../../kafka/producer');
const sendToAggregatorService = (notificationGroups) => {
  Array.isArray(notificationGroups) &&
    notificationGroups.forEach((value) => {
      // TODO: push to aggregator service
      console.log('I am pro', value);
      producer(value);
    });
};

module.exports = sendToAggregatorService;
