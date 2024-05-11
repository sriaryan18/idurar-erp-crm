var cron = require('node-cron');
const serviceConfigs = require('./config');
const mongoose = require('mongoose');
const { scheduleCron } = serviceConfigs;

const fetchNotificationToDispatch = async () => {
  const today = new Date();
//   today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const Model = mongoose.model('Notification');
  console.log('today',today,tomorrow)
  const notificationToBesent = await Model.find({
    schedule: {
      $gte: today,
      $lte: tomorrow,
    },
  }).exec();
  console.log('notid',notificationToBesent)
};

cron.schedule(
  scheduleCron,
  async () => {
    console.log('coron');
    fetchNotificationToDispatch();
  },
  { name: 'fetchNotifications', runOnInit: true }
);
