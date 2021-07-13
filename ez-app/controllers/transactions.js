const getTransactions = (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
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
