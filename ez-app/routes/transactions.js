const express = require('express');
const router = express.Router();
const {
	getTransactions,
	addTransaction,
	deleteTransaction,
	resetTransactions,
} = require('../controllers/transactions');

router
	.route('/')
	.get(getTransactions)
	.post(addTransaction)
	.delete(resetTransactions);

router.route('/:id').delete(deleteTransaction);

module.exports = router;
