import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import '../../css/Layout.css';

class Layout extends Component {


	state = {
		drawerOpen: false
	}

	handleOpen() {

	}


	render() {
		return (
			<MuiThemeProvider>
				<div className="Layout">
					<AppBar 
						title="Chat"
						onLeftIconButtonTouchTap={() => this.setState({drawerOpen: true}) }
						/>

					<Drawer
						docked={false}
						open={this.state.drawerOpen}
						onRequestChange={(drawerOpen) => this.setState({drawerOpen})}>

						<MenuItem><h1>Chat App</h1></MenuItem>
						<MenuItem>React</MenuItem>
						<MenuItem>React + Redux</MenuItem>
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