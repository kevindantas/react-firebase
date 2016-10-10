import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import * as firebase from 'firebase';

import SendMessage from './SendMessage';
import ChatMessage from './ChatMessage';

class Chat extends Component {

	state = {
		loading: true,
		messages: []
	}

	constructor() {
		super();
		this.database = firebase.database();
		this.messagesRef = this.database.ref('messages')
	}


	componentDidMount() {

		this.messagesRef.once('value', snap => {
			this.setState({ 
				loading: false
			})
		})


		this.messagesRef.on('child_added', (snap, id) => {
			var message = snap.val();
			message.id = id;

			this.state.messages.push(message)
			this.setState({
				messages: this.state.messages
			})
		})

	}


	handleSend(value) {
		var currentUser = firebase.auth().currentUser;
		var message = {
			author: {
				uid: currentUser.uid,
				name: currentUser.displayName,
				email: currentUser.email
			},
			message: value,
			createdAt: new Date().toISOString()
		}

		this.messagesRef.push().set(message);
	}


	renderLoading() {
		if(!this.state.loading && (!this.state.messages || this.state.messages.length < 1)) {
			return (<h3 className="feedback textCenter">Nenhuma mensagem enviada :(</h3>)
		}


		if(this.state.loading) {
			return (
				<div className="textCenter">
					<CircularProgress />
				</div>
			)
		}
	}


	renderMessages() {
		return this.state.messages.map((message, i) => (
				<ChatMessage 
					key={message.id} 
					date={message.createdAt}
					message={message.message} 
					author={message.author.name} />
		))
	}

	render() {
		return (
			<div>
				{ this.renderLoading() }

				{ this.renderMessages() }
				<SendMessage onSend={this.handleSend.bind(this)} />
			</div>
		);
	}
}

export default Chat;