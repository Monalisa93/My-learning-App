import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Form extends React.Component {
	state = {
		name: '',
		firstNameError: '',
		address: '',
		addressError: '',
		phone: '',
		phoneError: '',
		hobbies: '',
	};


	change = e => {
		// this.props.onChange({ [e.target.name]: e.target.value });
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	validate = () => {
		let isError = false;
		const errors = {
			firstNameError: '',
			addressError: '',
			phoneError: ''
		};

		if (this.state.name.length === 0) {
			isError = true;
			errors.firstNameError = 'Enter a valid First Name';
		}

		if (this.state.address.length === 0) {
			isError = true;
			errors.addressError = 'Enter a valid Address';
		}

		if (this.state.phone.length === 0) {
			isError = true;
			errors.phoneError = 'Enter a valid Phone Number';
		}

		this.setState({
			...this.state,
			...errors
		});

		return isError;
	};

	onSubmit = e => {
		// e.preventDefault();
		const err = this.validate();
		if (!err) {
			this.props.onSubmit(this.state);
			// reset form
			this.setState({
				name: '',
				firstNameError: '',
				address: '',
				addressError: '',
				phone: '',
				phoneError: '',
				hobbies: ''
			});
		}
	};

	onClear = e => {
		// e.preventDefault();
		// clear form
		this.setState({
			name: '',
			firstNameError: '',
			address: '',
			addressError: '',
			phone: '',
			phoneError: '',
			hobbies: ''
		});
	};

	onUpdate = e => {
		e.preventDefault();
		// Update form
		console.log('component updated');
	};


	render() {
		const { name, address, phone, hobbies } = this.state;
		const enabled =
			name.length > 0 &&
			address.length > 0 &&
			phone.length > 0 &&
			hobbies.length > 0;

		return (
			<MuiThemeProvider>
				<form className="input">
					<TextField
						name="name"
						floatingLabelText="Name"
						value={this.state.name}
						onChange={e => this.change(e)}
						errorText={this.state.firstNameError}
						floatingLabelFixed
					/>
					<br />
					<TextField
						name="address"
						floatingLabelText="Address"
						value={this.state.address}
						onChange={e => this.change(e)}
						errorText={this.state.addressError}
						floatingLabelFixed
					/>
					<br />
					<TextField
						name="phone"
						floatingLabelText="Phone"
						value={this.state.phone}
						onChange={e => this.change(e)}
						errorText={this.state.phoneError}
						floatingLabelFixed
					/>
					<br />
					<TextField
						name="hobbies"
						floatingLabelText="Hobbies"
						value={this.state.hobbies}
						onChange={e => this.change(e)}
						floatingLabelFixed
					/>
					<br />
					<RaisedButton className="submitBtn" disabled={!enabled} label="Add" onClick={e => this.onSubmit(e)} primary />
					<RaisedButton className="clearBtn" label="Clear" onClick={e => this.onClear(e)} primary />
				</form>
			</MuiThemeProvider>
		);
	}
}
