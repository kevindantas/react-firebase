import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import FacebookButton from './buttons/FacebookButton';
import GithubButton from './buttons/GithubButton';
import GoogleButton from './buttons/GoogleButton';

class Auth extends Component {
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
								label="Logar com o Facebook" 
								fullWidth={true} 
								className="social-button"
								buttonStyle={socialButton}  />


							<GithubButton 
								label="Logar com o Github" 
								fullWidth={true} 
								className="social-button github-button"
								buttonStyle={socialButton}  />


							<GoogleButton 
								label="Logar com o Google" 
								fullWidth={true} 
								className="social-button"
								buttonStyle={socialButton}  />


						</form>
					</CardText>

				</Card>
			</MuiThemeProvider>
		);
	}
}

export default Auth;