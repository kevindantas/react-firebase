import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';

import FacebookButton from './buttons/FacebookButton';
import GithubButton from './buttons/GithubButton';
import GoogleButton from './buttons/GoogleButton';

import '../css/Account.css';
import Auth from './Auth';

class Account extends Component {

	state = {
		user: {},
		providers: {
			facebook: null,
			google: null,
			github: null
		},
		loading: true,
		messages: [],
		feedback: '',
		snackbarOpen: false
	}


	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({
				user: user
			});

			for (let i = user.providerData.length - 1; i >= 0; i--) {
				switch(user.providerData[i].providerId) {
					case 'google.com':
						this.state.providers.google = true;
						break;
					case 'github.com':
						this.state.providers.github = true;
						break;
					case 'facebook.com':
						this.state.providers.facebook = true;
						break;
					default:
						break;
				}
			}

			this.setState({
				providers: this.state.providers
			})
		})
	}

	handleSync(type, event) {
		var provider;
		switch (type) {
			case 'facebook':
				provider = new firebase.auth.FacebookAuthProvider();
				break;
			case 'google':
				provider = new firebase.auth.GoogleAuthProvider();
				break;
			case 'github':
				provider = new firebase.auth.GithubAuthProvider();
				break;
			case 'email':
				let email = this.refs.email.getValue(),
					senha = this.refs.senha.getValue();
					firebase.auth().createUserWithEmailAndPassword(email, senha);
				break;
			default:
				break;
		}

		if(!provider) return;

		firebase.auth().currentUser.linkWithPopup(provider)
			.then(response => {
				this.setState({
					feedback: 'Conta vinculada com sucesso',
					snackbarOpen: true
				})
				return response;
			})
			.catch(e => {
				console.log(e)
				if(e.code == "auth/provider-already-linked") {
					this.setState({
						feedback: 'Conta já está vinculada',
						snackbarOpen: true
					})
				}
			})

		// var credential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
	}


	render() {
		const socialButton = {
			height: 60,
			borderRadius: 30
		}

		const notSync = {
			opacity: 0.5
		}

		const floatingLabelStyle = {
			color: '#666'
		}

		return (
			<div className="Account">
				<form>
					<fieldset>
						<legend><h2>Login com email e senha</h2></legend>
						<TextField
							ref="email"
							name="email"
							defaultValue={this.state.user.email}
							fullWidth={true}
							floatingLabelText="Email" 
							floatingLabelStyle={floatingLabelStyle} />

						<TextField
							ref="senha"
							name="senha"
							type="password"
							fullWidth={true}
							floatingLabelText="Senha" 
							floatingLabelStyle={floatingLabelStyle} />
							
						<div style={{textAlign: 'right'}}>
							<FlatButton 
								label="Salvar" 
								onClick={this.handleSync.bind(this, 'email')} />
						</div>
					</fieldset>

					<fieldset className="social">
						<legend><h2>Redes sociais</h2></legend>
						<FacebookButton 
							fullWidth={true}
							className="social-button"
							buttonStyle={socialButton}  
							label={`${this.state.providers.facebook ? 'Vinculado' : 'Vincular'} com o Facebook`}
							onClick={this.handleSync.bind(this, 'facebook')} 
							style={this.state.providers.facebook ? null : notSync} />

						<GithubButton 
							fullWidth={true}
							className="social-button github-button"
							buttonStyle={socialButton}  
							label={`${this.state.providers.github ? 'Vinculado' : 'Vincular'} com o Github`}
							onClick={this.handleSync.bind(this, 'github')} 
							style={this.state.providers.github ? null : notSync} />

						<GoogleButton 
							fullWidth={true}
							className="social-button"
							buttonStyle={socialButton}  
							label={`${this.state.providers.google ? 'Vinculado' : 'Vincular'} com o Google`}
							onClick={this.handleSync.bind(this, 'google')} 
							style={this.state.providers.google ? null : notSync} />
					</fieldset>
				</form>

				<Snackbar
					action="Okay"
					message={this.state.feedback}
					open={this.state.snackbarOpen} 
					onRequestClose={snackbarOpen => this.setState({snackbarOpen: false})}
					onActionTouchTap={snackbarOpen => this.setState({snackbarOpen: false})} />
			</div>
		);
	}
}

export default Account;