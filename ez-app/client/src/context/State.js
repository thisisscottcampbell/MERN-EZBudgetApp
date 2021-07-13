import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//init state
const initState = {
	transactions: [],
	error: null,
	loading: true,
};

//create context
export const GlobalContext = createContext(initState);

//create provider
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initState);

	//actions
	async function getTransactions() {
		try {
			const res = await axios.get('api/v1/transactions');

			dispatch({
				type: 'GET_TRANSACTIONS',
				payload: res.data.data,
			});
		} catch (err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response.data.error,
			});
		}
	}
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
			value={{
				transactions: state.transactions,
				error: state.error,
				loading: state.loading,
				getTransactions,
				deleteTrans,
				addTrans,
				reset,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
