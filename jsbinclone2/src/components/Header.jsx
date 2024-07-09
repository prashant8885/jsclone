import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {AppBar,Toolbar,styled} from '@mui/material'
// Assuming you have a logo.png in your src folder

const Container= styled(AppBar)`
background:grey;
height:9vh
`

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogoClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  const saveFile = () => {
    alert('Save option clicked');
    handleClose();
    // Add your save functionality here
  };

  const createNewFile = () => {
   
    handleClose();
    // Add your create new file functionality here
  };

  return (
    <Container position='static'>
    <div>
      <IconButton onClick={handleLogoClick}>
        <img src='https://cdn.iconscout.com/icon/free/png-256/free-jsbin-461810.png?f=webp' alt="Logo" style={{ width: 70 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
                <MenuItem onClick={createNewFile}>New</MenuItem>
        <MenuItem onClick={saveFile}>Save</MenuItem>
        <MenuItem onClick={handleClose}>Other Option</MenuItem>
      </Menu>
    </div>
    </Container>
  );
};

export default Header;
