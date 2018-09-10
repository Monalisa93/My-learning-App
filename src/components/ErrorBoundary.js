import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.arrayOf(PropTypes.node)
		]).isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null
		};
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			hasError: true,
			error,
			errorInfo
		});
	}

	render() {
		if(this.state.hasError) {
			// return <h1>Oops! Something went wrong</h1>
			return this.props.render(this.state.error, this.state.errorInfo);
		}
		// Render Children if there's no error
		return this.props.children;
	}
}

export default ErrorBoundary;
