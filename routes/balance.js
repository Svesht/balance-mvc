const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balance');

router.get('/', balanceController.getPayments);

router.post('/createPayment', balanceController.createPayment);

router.delete('/deletePayment', balanceController.deletePayment);

module.exports = router;