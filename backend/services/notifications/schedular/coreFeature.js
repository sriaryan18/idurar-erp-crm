const templates = require('./utils/templates');

const saveNotificatioonToDB = async (
  { notificationTemplateId, variables, schedule, userInfo, metaData },
  Model
) => {
  const newNotification = new Model({
    notificationTemplateId,
    variables,
    schedule,
    userInfo,
    metaData,
  });
  return await newNotification.save();
};

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

const performVerificatioon =  ({ notificationTemplateId, variables, schedule }) => {
  if (notificationTemplateId in templates) {
    const variablesVarified = checkAllVariables(
      templates[notificationTemplateId].variables,
      Object.keys(variables)
    ); 
    const scheduleCheck = checkSchedule(schedule);
    return variablesVarified && scheduleCheck;
  }
};

const scheduleNotification = async (Model, req, res) => {
  if (!Model) throw new Error('No Model found');

  const { notificationTemplateId, variables, schedule, userInfo, metaData } = req.body;

  const verification = performVerificatioon({ notificationTemplateId, variables, schedule });
  if (verification) {
    const savedNotification =await saveNotificatioonToDB(
      {
        notificationTemplateId,
        variables,
        schedule,
        userInfo,
        metaData,
      },
      Model
    );
    res.send(savedNotification._id);
  } else {
    res.status(500).send('Can not schedule notification');
  }
};

module.exports = scheduleNotification;
