import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import * as firebase from 'firebase';



import '../css/Chat.css';

class Account extends Component {

	state = {
		loading: true,
		messages: []
	}


	componentDidMount() {


	}


	handleSend(value) {
		
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
			<div className="Account">
				<form>
				</form>
			</div>
		);
	}
}

export default Account;