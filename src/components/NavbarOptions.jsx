import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const NavbarOptions = (props) => (
	<IconMenu
		{...props}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      	targetOrigin={{horizontal: 'right', vertical: 'top'}}
		iconButtonElement={
			<IconButton> <MoreVertIcon color="#fff" /> </IconButton> 
		}>

		<MenuItem primaryText="Minha conta" /> 
		<MenuItem primaryText="Logout" /> 

	</IconMenu>
);


export default NavbarOptions;