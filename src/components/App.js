/* eslint-disable indent,spaced-comment,prefer-const,react/no-multi-comp,react/jsx-no-undef,react/self-closing-comp */
import React, {Component} from 'react';
import axios from 'axios';
import Header from '../containers/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Griddle, {plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import InlineStyle from './CustomButton';
import RaisedButton from 'material-ui/RaisedButton';
import Form from './Form';
import Table from '../components/Table';
import ErrorBoundary from '../components/ErrorBoundary';

const styles = require('../styles/app.scss');

class App extends Component {
	state = {
		data: [],
		columnToSort: '',
		sortDirection: 'desc'
	};
	componentDidMount() {
		axios.get('https://private-5b0c2-uob1.apiary-mock.com/customers')
			.then(res => {
				console.log((res));
				this.setState({
					data: res.data,
				});
			});
	}
	// handleClick = e => {
	// 	e.preventDefault();
	// 	this.props.history.push('/sort');
	// };
	render() {
		return(
			<div>
			<MuiThemeProvider>
			<div className={styles.container}>
				<Header/>
				<Form
					onSubmit={submission =>
						this.setState({
							data: [...this.state.data, submission]
						})}
				/><br/>
				<h3>Below is an implementation of Table using Material UI </h3>
				<ErrorBoundary render={() => <h4>Oops! Something went wrong while displaying the table</h4>}>
					<Table
						//data={(this.state.data, this.state.columnToSort, this.state.sortDirection)}
						// To view data in table uncomment the below line
						data={(this.state.data)}
						handleSort={this.handleSort}
						header={[
							{
								name: 'First name',
								prop: 'name'
							},
							{
								name: 'Address',
								prop: 'address'
							},
							{
								name: 'Phone',
								prop: 'phone'
							},
							{
								name: 'Hobbies',
								prop: 'hobbies'
							}
						]}
					/>
				</ErrorBoundary>
				<br/>
				<h3>Below is an implementation of unhandled error caught by Error Boundary </h3>
				<ErrorBoundary render={() => <h4>Oops! Something went wrong while displaying the table</h4>}>
					<Table
						data={(this.state.data, this.state.columnToSort, this.state.sortDirection)}
						// To view data in table uncomment the below line
						// data={(this.state.data)}
						handleSort={this.handleSort}
						header={[
							{
								name: 'First name',
								prop: 'name'
							},
							{
								name: 'Address',
								prop: 'address'
							},
							{
								name: 'Phone',
								prop: 'phone'
							},
							{
								name: 'Hobbies',
								prop: 'hobbies'
							}
						]}
					/>
				</ErrorBoundary>
				<br/>
				<h3>Below is an implementation of Overriding style with Inline Approach </h3>
				{/*<RaisedButton label="Similar Hobbies" onClick={e => this.handleClick(e)} primary />*/}
				<InlineStyle onClick={e => this.handleClick(e)}/>
			</div>
			</MuiThemeProvider> <br/>
				<h3>Below is an implementation of Table using Griddle </h3>
				<Griddle
					plugins={[plugins.LocalPlugin]}
					data={(this.state.data)}
				>
					<RowDefinition>
						<ColumnDefinition id="name" order={1} title="Name" width={200}/>
						<ColumnDefinition id="address" title="Address" width={200}/>
						<ColumnDefinition id="phone" title="Phone" width={200}/>
						<ColumnDefinition id="hobbies" title="Hobbies" width={200}/>
					</RowDefinition>
				</Griddle>
			</div>
		);
	}
}

export default App;
