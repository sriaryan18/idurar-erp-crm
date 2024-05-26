const express = require('express');
const aggregateAndDispatchController = require('../controllers/serviceController');
const router = express.Router();

router.get('/', aggregateAndDispatchController.dispatch);

module.exports = router;
