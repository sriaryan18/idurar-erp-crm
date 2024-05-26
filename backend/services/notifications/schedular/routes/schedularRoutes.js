const express = require('express');
// TODO: make this with import alias
const { catchErrors } = require('../../../../src/handlers/errorHandlers');
const controller = require('../controllers/index');
const router = express.Router();
/*
SAMPLE PAYLOAD
{
  "notificationTemplateId": "paymentDues",
  "variables": {
    "var1":"xyz",
    "date":"date"
  },
  "schedule": "2024-05-12T18:15:00.731Z",
  "userInfo": {
    "userId": "user123",
    "email": "john@example.com"
  },
  "metaData": {
    "category": "reminder"
  }
}



*/
router.route('/').post(catchErrors(controller.save));

module.exports = router;
