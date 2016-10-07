import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
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

		return (
			<MuiThemeProvider>
				<Card style={styles}>
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

							<FacebookButton label="Logar com o Facebook" />
							<GithubButton label="Logar com o Github" />
							<GoogleButton label="Logar com o Google" />
						</form>
					</CardText>

					<CardActions>
						
					</CardActions>
				</Card>
			</MuiThemeProvider>
		);
	}
}

export default Auth;