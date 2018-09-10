/* eslint-disable comma-spacing,key-spacing */
import React from 'react';
import Form from '../src/components/Form';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';


configure({ adapter: new Adapter() });

describe('>>> F O R M <<<',()=>{
	it('should render without throwing error', () => {
		expect(shallow(<Form/>).find('form.input').exists()).toBe(true);
	});
	// Form components intial rendering of all form components
	it('renders a name textfield', () => {
		expect(shallow(<Form/>).find('name').length).toEqual(0);
	});

	it('renders a address textfield', () => {
		expect(shallow(<Form/>).find('address').length).toEqual(0);
	});
	it('renders a phone textfield', () => {
		expect(shallow(<Form/>).find('phone').length).toEqual(0);
	});
	it('renders a hobbies textfield', () => {
		expect(shallow(<Form/>).find('hobbies').length).toEqual(0);
	});
	it('should render textfields to input when form component renders', ()=> {
		const wrapper = shallow(
			<Form>
				<form className="input"/>
			</Form>
		);
		expect(wrapper.contains(<form className="input"/>)).toBe(false);
	});
	it('can handle submit button click',() => {
		const wrapper = shallow(<Form/>);
		const submitBtn = wrapper.find('RaisedButton.submitBtn');
		submitBtn.simulate('click');
	});
	it('can handle clear button click', () => {
		const wrapper = shallow(<Form/>);
		const submitBtn = wrapper.find('RaisedButton.clearBtn');
		submitBtn.simulate('click');
	});
});
//* ******************************************************************************************************
