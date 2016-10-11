import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

import NavbarOptions from '../NavbarOptions';

import '../../css/Layout.css';

class Layout extends Component {


	state = {
		drawerOpen: false
	}



	render() {
		return (
			<MuiThemeProvider>
				<div className="Layout">
					<AppBar 
						title="Chat"
						style={{background: '#DB9614'}}
					    iconElementRight={<NavbarOptions />}
						onLeftIconButtonTouchTap={() => this.setState({drawerOpen: true}) }
						/>

					<Drawer
						docked={false}
						open={this.state.drawerOpen}
						onRequestChange={(drawerOpen) => this.setState({drawerOpen})}>

						<h1 style={{padding: 12}}>Chat App</h1>

						<Link to="/chat" className="MenuItem" activeClassName="isActive"> 
							<MenuItem>React</MenuItem> 
						</Link>

						<Link to="/chat-redux" className="MenuItem" activeClassName="isActive"> 
							<MenuItem>React + Redux</MenuItem>
						</Link>
					</Drawer>

					<main>
						{ this.props.children }
					</main>

				</div>
			</MuiThemeProvider>
		);
	}
}

export default Layout;