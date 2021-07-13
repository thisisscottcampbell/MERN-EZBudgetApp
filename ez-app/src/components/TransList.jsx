import React, { useContext } from 'react';
import TransItem from './TransItem';
import { GlobalContext } from '../context/State';

const TransList = () => {
	const { transactions } = useContext(GlobalContext);

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
