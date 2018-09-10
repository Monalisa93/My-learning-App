/* eslint-disable no-shadow */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';

const JSON = require('circular-json');


class CustomerList extends Component {
	state = {
		data: []
	};

	componentWillMount() {
		axios.get('https://private-5b0c2-uob1.apiary-mock.com/customers')
			.then(res => {
				console.log((JSON.stringify(res)));
				this.setState({
					data: res.data,
				});
			});
	}


	render() {
		let sortedData = JSON.parse(JSON.stringify(this.state.data));
		sortedData = JSON.parse(JSON.stringify(sortedData.map((list, i)=>{return{...list, hobbies: list.hobbies.sort()};})));

		console.log('SortedData :', sortedData);

		const hobbies = sortedData.map((hobbies, i) => {return hobbies.hobbies;});
		console.log('hobbies :', hobbies);

		const similarHobbies = hobbies.filter(p => JSON.stringify(p.hobbies) === JSON.stringify(hobbies.sort()));
		console.log('similarHobbies :', similarHobbies);


		if (similarHobbies.length !== 0) {
			return(
				<ErrorBoundary>
					<table>
						<tr>
							<th>List of Similar Hobbies</th>
						</tr>
						{similarHobbies}
					</table>
				</ErrorBoundary>
			);
		}
		return(
			<h1>
				No Common Hobbies to show!!
			</h1>
		);
	}
}


function mapStateToProps(state) {
	return{
		customers: state.customers
	};
}

export default connect(mapStateToProps)(CustomerList);
