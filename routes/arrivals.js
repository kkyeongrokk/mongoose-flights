const express = require('express');
const router = express.Router();
const arrivalCtrl = require('../controllers/arrivals');

router.post('/flights/:id/arrivals', arrivalCtrl.create);

module.exports = router;