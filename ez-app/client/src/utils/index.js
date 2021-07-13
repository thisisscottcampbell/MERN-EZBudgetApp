export const formatNum = (num) =>
	num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const getMonth = () => {
	let month;

	const cache = {
		0: 'January',
		1: 'February',
		2: 'March',
		3: 'April',
		4: 'May',
		5: 'June',
		6: 'July',
		7: 'August',
		8: 'September',
		9: 'October',
		10: 'November',
		11: 'December',
	};

	const today = new Date();
	const id = today.getMonth();

	for (const key in cache) {
		if (key == id) month = cache[id];
	}
	return month;
};
