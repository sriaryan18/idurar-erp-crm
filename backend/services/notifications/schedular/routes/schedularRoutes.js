const express = require('express');
const coreRoutes = require('../controllers/coreController') // TODO: make this with import alias
const { catchErrors } = require('../../../../src/handlers/errorHandlers');
const controller = require('../controllers/index')
const router = express.Router();

router.route('/').post(catchErrors(controller.schedule));

module.exports = router