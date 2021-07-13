const getTransactions = (req, res, next) => {
	res.send('GET transactions');
};

const addTransaction = (req, res, next) => {
	res.send('POST transaction');
};

const deleteTransaction = (req, res, next) => {
	res.send('DELETE transaction');
};

const resetTransactions = (req, res, next) => {
	res.send('RESET transactions');
};

module.exports = {
	getTransactions,
	addTransaction,
	deleteTransaction,
	resetTransactions,
};
