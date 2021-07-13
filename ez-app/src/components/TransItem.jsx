import React, { useContext } from 'react';
import { GlobalContext } from '../context/State';

const TransItem = ({ trans }) => {
	const { deleteTrans } = useContext(GlobalContext);
	console.log(deleteTrans);
	const sign = trans.amount < 0 ? '-' : '+';

	return (
		<div>
			<li className={trans.amount < 0 ? 'minus' : 'plus'}>
				{trans.text}{' '}
				<span>
					{sign}${Math.abs(trans.amount)}
				</span>
				<button onClick={() => deleteTrans(trans.id)} className="delete-btn">
					x
				</button>
			</li>
		</div>
	);
};

export default TransItem;
