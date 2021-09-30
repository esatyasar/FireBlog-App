import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {NavLink} from "react-router-dom";




export default function Navbar() {

   
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleChange = () => {
      setAuth(!auth);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/Dashboard" activeClassName="active" style={{textDecoration:"none", color:"white"}}>Esat's Blog</NavLink>
            </Typography>
            <FormGroup>
            {auth ? <div>
              <NavLink to="/Login" activeClassName = "active" style={{textDecoration:"none", color:"white"}}>
                <span onClick={handleChange}>Log Out</span> 
              </NavLink>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} >
                  <NavLink to="/Profile" activeClassName = "active" style={{textDecoration:"none"}}>Profile</NavLink>
                  </MenuItem>

                  <MenuItem onClick={handleClose} >
                    <NavLink to="/NewBlog" activeClassName = "active" style={{textDecoration:"none"}}>New Blog</NavLink> 
                  </MenuItem>
                </Menu>
              </div> : 
            (<div >
              <NavLink to="/Login" activeClassName = "active" style={{textDecoration:"none", color:"white"}}>
                <span>Login   </span> 
              </NavLink>
              <NavLink to="/Register" activeClassName = "active" style={{textDecoration:"none", color:"white"}}>
                <span>   Register</span> 
              </NavLink></div>)}
          </FormGroup>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }