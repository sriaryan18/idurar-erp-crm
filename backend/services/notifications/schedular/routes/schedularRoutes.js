const express = require('express');
// TODO: make this with import alias
const { catchErrors } = require('@/handlers/errorHandlers');
const controller = require('../controllers/index')
const router = express.Router();

router.route('/').post(catchErrors(controller.save));

module.exports = router