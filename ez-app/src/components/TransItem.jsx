import React from 'react';

const TransItem = ({ trans }) => {
	const sign = trans.amount < 0 ? '-' : '+';

	return (
		<div>
			<li className={trans.amount < 0 ? 'minus' : 'plus'}>
				{trans.text}{' '}
				<span>
					{sign}${Math.abs(trans.amount)}
				</span>
				<button className="delete-btn">x</button>
			</li>
		</div>
	);
};

export default TransItem;
