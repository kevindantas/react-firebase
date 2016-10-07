import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookIcon from '../icons/FacebookIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


/**
 * Button with the color and Facebook icon's
 *
 * @extends {Component}
 */
export default class FacebookButton extends Component {

	/**
	 * Set the comopnent's properties
	 * @type {Object}
	 */
	static propTypes = {
		label: PropTypes.string.isRequired
	};


	/**
	 * Define child context
	 * @type {Object}
	 */
	static childContextTypes = {
		muiTheme: PropTypes.object.isRequired
	};

	/**
	 * Get child context
	 * @return {[type]} [description]
	 */
	getChildContext () {
		return {
			muiTheme: getMuiTheme({
				palette: {
					primary1Color: '#3A589B'
				},
				primary1Color: '#3A589B'
			})
		}
	}


	/**
	 * Render Component
	 * @return {opbject} Rendered Component
	 */
	render () {
		const buttonStyles = {
			margin: '8px 0',
			background: 'transparent'
		}
		return (
			<RaisedButton {...this.props} icon={<FacebookIcon />} className="button" primary={true} style={buttonStyles} />
		);
	}
}