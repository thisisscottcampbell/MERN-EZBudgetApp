import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//init state
const initState = {
	transactions: [],
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

	function reset() {
		dispatch({
			type: 'RESET_BUDGET',
			payload: initState.transactions,
		});
	}

	return (
		<GlobalContext.Provider
			value={{ transactions: state.transactions, deleteTrans, addTrans, reset }}
		>
			{children}
		</GlobalContext.Provider>
	);
};
