import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui/svg-icons/content/send';


class SendMessage extends Component {

	state = {
		message: ''
	}


	handleSend(e) {
		e.preventDefault();
		var messageValue = this.state.message;
		this.setState({
			message: ''
		})

		this.props.onSend(messageValue);
	}



	handleChange(e) {
		 this.setState({ 
		 	message: e.target.value 
		 })
	}


	render() {
		const formStyle = {
			padding: 8,
			background: '#eee',
			maxWidth: '100vw',
			overflow: 'hidden',
			position: 'fixed',
			bottom: 0,
			left: 0, 
			right: 0
		}

		const labelStyle = {
			color: '#777',
			paddingLeft: 16,
			paddingRigth: 90
		}

		const fieldStyle = {
			color: '#777',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		}

		const buttonStyle = {
			background: '#8BC34A',
			position: 'absolute',
			borderRadius: 1000,
			right: 0
		}

		return (
			<form style={formStyle} onSubmit={this.handleSend.bind(this)}>
				<TextField 
					fullWidth={true}
					style={fieldStyle}
					hintStyle={labelStyle}
					inputStyle={labelStyle}
					value={this.state.message}
					className="sendMessageField"
					hintText="Digite sua mensagem..." 
					onChange={this.handleChange.bind(this)}/>

				<IconButton style={buttonStyle} iconStyle={{color: 'white'}} type="submit" >
					<SendIcon />
				</IconButton>
			</form>
		);
	}
}

export default SendMessage;