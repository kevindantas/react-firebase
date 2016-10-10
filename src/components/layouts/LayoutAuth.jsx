import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../../css/Auth.css';

const LayoutAuth = (props) => (
	<MuiThemeProvider>
		<div className="LayoutAuth">
			{ props.children }
		</div>
	</MuiThemeProvider>
);

export default LayoutAuth;