const client = require('./kafkaClient');
// TODO: migrate this logic to setup script
const init = async () => {
  const admin = client.admin();
  admin.createTopics({
    topics: [
      {
        topic: 'notification',
        numPartitions: 2,
      },
    ],
  });
};
init();
