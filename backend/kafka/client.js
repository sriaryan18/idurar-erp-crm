const { Kafka, logLevel } = require('kafkajs');

// TODO: make variables fetched from .env
// TODO: make kafka client generic such that u do not need to make multiple clients for each service
const kafkaClient = new Kafka({
  brokers: ['localhost:29092'],
  clientId: 'notifications',
  logLevel: logLevel.INFO,
});

module.exports = kafkaClient;
