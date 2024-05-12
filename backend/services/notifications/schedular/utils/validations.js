
const templates = require('./templates')

  const checkSchedule = (schedule) => {
    try {
      const schduledTime = new Date(schedule);
      const currentDate = new Date();
      return currentDate < schduledTime;
    } catch (e) {
      return false;
    }
  };
  const checkAllVariables = (templateVariables, apiVariables) => {
    return templateVariables.every((ele) => apiVariables.includes(ele));
  };
  
  const performVerificatioon = ({ notificationTemplateId, variables, schedule }) => {
    if (notificationTemplateId in templates) {
      const variablesVarified = checkAllVariables(
        templates[notificationTemplateId].variables,
        Object.keys(variables)
      );
      const scheduleCheck = checkSchedule(schedule);
      return variablesVarified && scheduleCheck;
    }
  };
  
  module.exports = performVerificatioon;