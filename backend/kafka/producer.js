const client = require('./client');

const producer = client.producer();

const produceMessage = async (message) => {
  await producer.connect();
  console.log('here', message);
  await producer.send({
    topic: 'notifications',
    messages: [
      {
        key: 'test',
        value: JSON.stringify(message),
      },
    ],
  });
};

module.exports = produceMessage;
