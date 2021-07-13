import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//init state
const initState = {
	transactions: [
		{ id: 1, text: 'Pizza', amount: -50 },
		{ id: 2, text: 'Chinese', amount: -40 },
		{ id: 3, text: 'Thai', amount: -60 },
		{ id: 4, text: 'Mexican', amount: -30 },
		{ id: 5, text: 'Lotto', amount: 500 },
	],
};

//create context
export const GlobalContext = createContext(initState);

//create provider
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initState);

	//actions
	function deleteTrans(id) {
		console.log('fired!');
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		});
	}

	function addTrans(trans) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: trans,
		});
	}

	return (
		<GlobalContext.Provider
			value={{ transactions: state.transactions, deleteTrans }}
		>
			{children}
		</GlobalContext.Provider>
	);
};