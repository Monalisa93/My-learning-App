/* eslint-disable comma-spacing,key-spacing,space-before-function-paren,no-undef,func-names */
import { getCustomers } from '../src/actions/index';
import * as actions from '../src/actions/index';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('>>> A C T I O N S <<<',()=> {
	beforeEach(function () {
		moxios.install();
	});

	afterEach(function () {
		moxios.uninstall();
	});
	it('creates GET_CUSTOMERS successfully after creating', () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: getCustomers,
			});
		});
	});
	const expectedActions = [
		{ type: actions.GET_CUSTOMERS }
	];
	const store = mockStore({ data: {} });
	return store.dispatch(actions.getCustomers()).then(() => {
		// return of async actions
		expect(store.getCustomers()).toEqual(expectedActions);
	});
});
//* ******************************************************************************************************
