import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';


import FacebookButton from './buttons/FacebookButton';
import GithubButton from './buttons/GithubButton';
import GoogleButton from './buttons/GoogleButton';

class Auth extends Component {
	
	state = {
		error: null
	}


	/**
	 * Handle errors from all Auth Providers
	 * 
	 * @param  {object} e Error
	 */
	handleError(e) {
		console.log(e);
		var message;
		if(e.code == 'auth/account-exists-with-different-credential') {
			message = `O email "${e.email}" já está sendo usado, você pode logar com sua conta e associar as redes sociais`;
			this.setState({
				error: message
			})
		}
	}


	/**
	 * Login with Github Provider
	 */
	handleGithubAuth() {
		var githubProvider = new firebase.auth.GithubAuthProvider();

		firebase.auth().signInWithPopup(githubProvider)
			.then(response => {
				this.props.history.push('/chat');
			})
			.catch(e => this.handleError(e))
	}

	/**
	 * Login with Google Provider
	 */
	handleGoogleAuth() {
		var GoogleProvider = new firebase.auth.GoogleAuthProvider();

		firebase.auth().signInWithPopup(GoogleProvider)
			.then(response => {
				this.props.history.push('/chat');
			})
			.catch(e => this.handleError(e))
	}

	/**
	 * Login with Facebook Provider
	 */
	handleFacebookAuth() {
		var facebookProvider = new firebase.auth.FacebookAuthProvider();

		firebase.auth().signInWithPopup(facebookProvider)
			.then(response => {
				this.props.history.push('/chat');
			})
			.catch(e => this.handleError(e))
	}


	/**
	 * Render the component
	 */
	render() {
		const styles = {
			width: 500,
			margin: 'auto'
		};


		const socialButton = {
			height: 60,
			borderRadius: 30
		}

		return (
			<Card style={styles} className="Auth">
				<CardTitle title="Login" />

				<CardText>
					<form>
						<TextField 
							required={true}
							fullWidth={true}
							floatingLabelText="Email" />
						<TextField 
							type="password"
							required={true}
							fullWidth={true}
							floatingLabelText="Senha: " />

						<RaisedButton primary={true} label="Login" />

						<p className="divider"> ou use alguma rede social </p>

						<p className="error"> { this.state.error } </p>

						<FacebookButton 
							fullWidth={true} 
							className="social-button"
							buttonStyle={socialButton}  
							label="Logar com o Facebook" 
							onClick={this.handleFacebookAuth.bind(this)} />

						<GithubButton 
							fullWidth={true} 
							className="social-button github-button"
							buttonStyle={socialButton}  
							label="Logar com o Github" 
							onClick={this.handleGithubAuth.bind(this)} />

						<GoogleButton 
							fullWidth={true} 
							className="social-button"
							buttonStyle={socialButton}  
							label="Logar com o Google" 
							onClick={this.handleGoogleAuth.bind(this)} />

					</form>
				</CardText>

			</Card>
		);
	}
}

export default Auth;