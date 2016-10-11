import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GoogleIcon from '../icons/GoogleIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * Button with the color and icon from Google
 *
 * @extends {Component}
 */
export default class GoogleButton extends Component {

	/**
	 * Set the comopnent's properties
	 * @type {Object}
	 */
	static propTypes = {
		label: PropTypes.string.isRequired
	}

	/**
	 * Define child context
	 * @type {Object}
	 */
	static childContextTypes = {
		muiTheme: PropTypes.object.isRequired
	}


	/**
	 * Get child context
	 * @return {[type]} [description]
	 */
	getChildContext () {
		return {
			muiTheme: getMuiTheme({
				palette: {
					primary1Color: '#D95032'
				}
			})
		}
	}


	/**
	 * Render Component
	 * @return {opbject} Rendered Component
	 */
	render () {
		return (
			<RaisedButton {...this.props} icon={<GoogleIcon />} primary={true} style={this.buttonStyles} /> 
		);
	}
}
