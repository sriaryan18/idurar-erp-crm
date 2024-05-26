const resolveVariables = require('./resolveVariables');
const resolveTemplateToNotif = require('./resolveTemplatesToNotif');
const aggregateReminderNotification = (reminderNotification) => {
  console.log(reminderNotification);

  reminderNotification.map((item) => {
    const { template, data } = item;
    const context = resolveVariables(template, data);
    const finalMsg = resolveTemplateToNotif(template.message, context);

    console.log('I am resolved str', finalMsg);
  });
};
module.exports = aggregateReminderNotification;
