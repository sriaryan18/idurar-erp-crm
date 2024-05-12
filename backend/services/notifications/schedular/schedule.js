var cron = require('node-cron');
const serviceConfigs = require('./config');
const mongoose = require('mongoose');
const sendToAggregatorService = require('./libs/aggregator')
const { scheduleCron } = serviceConfigs;
// TODO: refactor this file (infact the whole codebase of this service)
const fetchNotificationToDispatch = async () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const Model = mongoose.model('Notification');
  console.log('today', today, tomorrow);
  const notificationGroupedById = await Model.aggregate([
    {
      $match: {
        schedule: {
          $gte: today,
          $lte: tomorrow,
        },
      },
    },
    {
      $group: {
        _id: '$userInfo.userId',
        notificationGoups: { $push: '$$ROOT' },
      },
    },
  ]);
  sendToAggregatorService(notificationGroupedById);
  console.log('notid', notificationGroupedById);
};

cron.schedule(
  scheduleCron,
  async () => {
    console.log('coron');
    fetchNotificationToDispatch();
  },
  { name: 'fetchNotifications', runOnInit: true }
);
