import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {logout, useAuthDispatch} from "../Context";

const style = {
    flexGrow: 1
};

function NavBar() {
    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        logout(dispatch);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" style={style}>
                        React User Application
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;