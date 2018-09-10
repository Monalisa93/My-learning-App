import * as types from './types';
import axios from 'axios';

export function filterTable(filter) {
	return {
		type: types.FILTER,
		filter
	};
}

export function count(counter) {
	return {
		type: types.COUNTER_UP,
		counter
	};
}

export function getCustomers() {
	const request = axios.get('https://private-5b0c2-uob1.apiary-mock.com/customers');

	return (dispatch) => {
		return request.then(({data}) => {
			dispatch({ type: 'GET_CUSTOMERS', payload: data});
		});
	};
}
