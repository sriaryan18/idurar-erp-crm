const config = require('../notificationCategoryConfigs');
const notificationTemplates = require('../../schedular/utils/templates');
const aggregateReminderNotification = require('../utils/aggregateReminder');
const aggregate = (groupedNotification) => {
  const { notificationGoups } = JSON.parse(groupedNotification);
  const mergedNotifications = {};
  const soloNotifications = {};
  notificationGoups.forEach((data) => {
    const {
      metaData: { category },
      notificationTemplateId,
    } = data;
    const { merge, basis } = config[category];

    if (merge) {
      const template = notificationTemplates[notificationTemplateId];

      if (category in mergedNotifications) {
        mergedNotifications[category].push({ template, data });
      } else {
        mergedNotifications[category] = [{ template, data }];
      }
    }
  });
  for (const [key, value] of Object.entries(mergedNotifications)) {
    // console.log('key value', key, value, Object.entries(mergedNotifications));
    if (key === 'reminder') {
      aggregateReminderNotification(value);
    }
  }

  console.log('----------------------------------------------');
};

module.exports = aggregate;
