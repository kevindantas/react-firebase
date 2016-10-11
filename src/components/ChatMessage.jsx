import React, { Component } from 'react';

import '../css/ChatMessage.css';

class ChatMessage extends Component {


	render() {
		const classes = 'ownMessage'
		return (
			<div className={`ChatMessage ${classes}`}>
				<span className="author"> { this.props.author } </span>
				<p> { this.props.message } </p>
			</div>
		);
	}
}


export default ChatMessage;