import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GithubIcon from '../icons/GithubIcon';

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
	 * Render Component
	 * @return {opbject} Rendered Component
	 */
	render () {
		const buttonStyles = {
			margin: '8px 0',
			background: 'transparent'
		}
		return (
			<RaisedButton {...this.props} icon={<GithubIcon />} style={buttonStyles} />
		);
	}
}