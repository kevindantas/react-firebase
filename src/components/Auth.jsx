import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase';


import FacebookButton from './buttons/FacebookButton';
import GithubButton from './buttons/GithubButton';
import GoogleButton from './buttons/GoogleButton';

class Auth extends Component {


	handleGithubAuth() {
		var githubProvider = new firebase.auth.GithubAuthProvider();

		firebase.auth().signInWithPopup(githubProvider)
			.then(response => {
				console.log(response)
			})
	}


	handleGoogleAuth() {
		var GoogleProvider = new firebase.auth.GoogleAuthProvider();

		firebase.auth().signInWithPopup(GoogleProvider)
			.then(response => {
				console.log(response)
			})
	}

	handleFacebookAuth() {
		var facebookProvider = new firebase.auth.FacebookAuthProvider();

		firebase.auth().signInWithPopup(facebookProvider)
			.then(response => {
				console.log(response)
			})
	}


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
			<MuiThemeProvider>
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
			</MuiThemeProvider>
		);
	}
}

export default Auth;