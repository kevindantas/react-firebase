import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

import * as firebase from 'firebase';


/**
 * Button with the color and Facebook icon's
 *
 * @extends {Component}
 */
export default class LogoutButton extends Component {


	/**
	 * Render Component
	 * @return {opbject} Rendered Component
	 */
	render () {
		const buttonStyles =  Object.assign({
			margin: '8px 0',
			background: 'transparent',
		}, this.props.style);
		return (
			<a href="#" 
			style={{display: 'block'}}
			onClick={_ => {
				console.log(this)
				firebase.auth().signOut().then(response => {
					console.log(response)
					this.props.history.push('/auth');
				})
			}}>Logout</a>
		);
	}
}