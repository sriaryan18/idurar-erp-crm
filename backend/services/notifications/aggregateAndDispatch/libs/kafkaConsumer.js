const kafka = require('../../../../kafka/client');

const consumer = kafka.consumer({ groupId: 'notification-groups' });
const aggregator = require('./aggregator');

(async () => {
  await consumer.connect();
  await consumer.subscribe({
    topics: ['notifications'],
    fromBeginning: true,
  });
  await consumer.run({
    eachMessage: async (data) => {
      aggregator(data.message.value.toString());
    },
  });
})();
