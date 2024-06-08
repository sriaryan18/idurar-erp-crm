const performVerification = require('../utils/validations');
const saveNotificationToDB = async (
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

const saveNotificationItem = async (Model, req, res) => {
  if (!Model) throw new Error('No Model found');
  const { notificationTemplateId, variables, schedule, userInfo, metaData } = req.body;

  const verification = performVerification({ notificationTemplateId, variables, schedule });
  if (verification) {
    const savedNotification = await saveNotificationToDB(
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

module.exports = saveNotificationItem;
