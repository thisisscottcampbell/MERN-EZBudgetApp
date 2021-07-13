import React, { useState, useEffect } from 'react';
import { getMonth } from '../utils';

const Header = () => {
	const [month, setMonth] = useState('');

	useEffect(() => setMonth(getMonth()));

	return (
		<div className="header">
			<h1 style={{ color: 'turquoise' }}>{month}</h1>
		</div>
	);
};

export default Header;
