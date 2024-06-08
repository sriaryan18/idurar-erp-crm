const resolveVariables = require('../utils/resolveVariables');
const resolveTemplateToNotif = require('../utils/resolveTemplatesToNotif');
const aggregateReminderNotification = (reminderNotification) => {
  return reminderNotification.map((item) => {
    const { template, data } = item;
    const context = resolveVariables(template, data);
    const finalMsg = resolveTemplateToNotif(template.message, context);
    return finalMsg;
  });
};
module.exports = aggregateReminderNotification;
