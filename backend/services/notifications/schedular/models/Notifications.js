const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  notificationTemplateId: {
    type: String,
    required: true,
  },
  variables: {
    type: Object,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  userInfo: {
    type: Object,
    required: true,
  },
  metaData: {
    type: Object,
    required: false,
  },
});
schema.plugin(require('mongoose-autopopulate'));
schema.index('schedule')
module.exports = mongoose.model('Notification', schema);
