import React, { useContext } from 'react';
import { GlobalContext } from '../context/State';

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((tran) => tran.amount);

	const getDeposit = (array) => {
		if (!array.length) return;
		let deposit;

		for (const trans of array) {
			if (trans > 0) {
				deposit = trans;
				break;
			}
		}
		return deposit ? deposit : 0;
	};

	const getExpenses = (array) => {
		if (!array.length) return;
		const expenses = [];

		for (const trans of array) {
			if (trans < 0) expenses.push(trans);
		}

		if (!expenses.length) return 0;

		return expenses.reduce((exp, val) => (exp += val)).toFixed(2);
	};

	// const income = amounts
	// 	.filter((item) => item > 0)
	// 	.reduce((acc, item) => (acc += item))
	// 	.toFixed(2);
	const income = getDeposit(amounts);

	// const expense = amounts
	// 	.filter((item) => item < 0)
	// 	.reduce((acc, item) => (acc += item))
	// 	.toFixed(2);
	const expense = getExpenses(amounts);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p id="balance" className="money">
					{income}
				</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p id="money-minus" className="money minus">
					{expense}
				</p>
			</div>
		</div>
	);
};

export default IncomeExpenses;
