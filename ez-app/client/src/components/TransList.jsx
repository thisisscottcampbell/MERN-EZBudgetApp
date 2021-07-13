import React, { useContext, useEffect } from 'react';
import TransItem from './TransItem';
import { GlobalContext } from '../context/State';

const TransList = () => {
	const { transactions, getTransactions } = useContext(GlobalContext);

	useEffect(() => {
		getTransactions();
	}, []);

	const renderTrans = transactions.map((trans) => (
		<TransItem key={trans.id} trans={trans} />
	));

	return (
		<div>
			<h3>History</h3>
			<ul className="list">{renderTrans}</ul>
		</div>
	);
};

export default TransList;
