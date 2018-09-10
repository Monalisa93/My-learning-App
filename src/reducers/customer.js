/* eslint-disable space-before-function-paren */

export default function request (state = {}, action) {
	switch (action.type) {
		case 'GET_CUSTOMER':
			return{
				result: action.payload
			};
		default:
			return state;
	}
}
