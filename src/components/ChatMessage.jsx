import React, { Component } from 'react';

import '../css/ChatMessage.css';

class ChatMessage extends Component {


	render() {
		const classes = 'ownMessage'
		return (
			<div className={`ChatMessage ${classes}`}>
				<p> { this.props.message } </p>
				
				<span className="author"> { this.props.author } </span>
			</div>
		);
	}
}


export default ChatMessage;