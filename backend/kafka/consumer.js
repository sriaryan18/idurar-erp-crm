const kafka = require('./client');

const consumer = kafka.consumer({ groupId: 'notification-groups' });

(async () => {
  await consumer.connect();
  await consumer.subscribe({
    topics: ['notifications'],
    fromBeginning: true,
  });
  await consumer.run({
    eachMessage: async (data) => {
      console.log(data.message.value.toString());
    },
  });
})();
