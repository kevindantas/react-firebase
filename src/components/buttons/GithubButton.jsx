import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GithubIcon from '../icons/GithubIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * Button with the color and icon from Google
 *
 * @extends {Component}
 */
export default class GithubButton extends Component {

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
					primary1Color: '#fff',
					alternateTextColor: '#bbb'
				}
			})
		}
	}


	
	/**
	 * Render Component
	 * @return {opbject} Rendered Component
	 */
	render () {
		const buttonStyles =  Object.assign({
			margin: '8px 0',
			background: 'transparent',
		}, this.props.style)
		return (
			<RaisedButton {...this.props} icon={<GithubIcon />} primary={true} style={buttonStyles} />
		);
	}
}