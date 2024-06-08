const config = require('../notificationCategoryConfigs');
const notificationTemplates = require('../../schedular/utils/templates');
const { globSync } = require('glob');
const path = require('path');

const pattern = './backend/services/notifications/aggregateAndDispatch/handlers/*.js';
const handlersFiles = globSync(pattern);
const handlerFns = {};

handlersFiles.forEach((filePath) => {
  const handlerName = path.basename(filePath, '.js');
  handlerFns[handlerName] = require(path.resolve(filePath));
});
console.log('I am handler', handlerFns, handlersFiles);
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
    const messages = handlerFns[key](value);
  }
};

module.exports = aggregate;
