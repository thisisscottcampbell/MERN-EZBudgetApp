import React, { useContext } from 'react';
import { GlobalContext } from '../context/State';
import { formatNum } from '../utils';

const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((tran) => tran.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<div className="balance-exp-container">
			<div>
				<h4>Available Balance</h4>
				<h1 id="money-plus" className="money plus">
					{formatNum(total)}
				</h1>
			</div>
		</div>
	);
};

export default Balance;
