import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';

const NavbarOptions = (props) => (
	<IconMenu
		{...props}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      	targetOrigin={{horizontal: 'right', vertical: 'top'}}
		iconButtonElement={
			<IconButton> <MoreVertIcon color="#fff" /> </IconButton> 
		}>

		<Link to="/account" className="OptionMenu" activeClassName="isActive"> 
			<MenuItem primaryText="Minha conta" /> 
		</Link>

		<MenuItem primaryText="Logout" /> 

	</IconMenu>
);


export default NavbarOptions;