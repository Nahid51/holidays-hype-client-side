import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../../images/logo.png'
import useAuth from '../../../Hooks/useAuth';
import { Button } from 'react-bootstrap';

const drawerWidth = 200;

function Dashboard(props) {
    const { user, admin, logOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ marginLeft: '50px' }}>
            <NavLink to="/" >
                <img
                    style={{ margin: '10px 0 50px 0' }}
                    src={logo}
                    alt="Company Logo"
                    loading="lazy"
                    width="50%"
                />
            </NavLink>
            <List>
                <NavLink style={{ textDecoration: 'none', color: '#322A62' }} to="/dashboard">Add Review</NavLink>
                <br /><br />

                {admin &&
                    <Box>
                        <NavLink style={{ textDecoration: 'none', color: '#322A62' }} to="/dashboard/addblog">Add Blog</NavLink>
                        <br /><br />
                        <NavLink style={{ textDecoration: 'none', color: '#322A62' }} to="/dashboard/manageblog">Manage Blogs</NavLink>
                    </Box>
                }

                {user.email ?
                    <Button className='btn-grad mt-5' onClick={logOut} >Logout</Button> :
                    <NavLink to='/login'>
                        <Button>Login</Button>
                    </NavLink>
                }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: 'white' }}>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ color: '#322A62' }} variant="h6" noWrap component="div">
                        <NavLink style={{ textDecoration: 'none', color: '#322A62' }} to="/">Home</NavLink>
                    </Typography>
                    <Typography sx={{ color: '#322A62', ml: 'auto' }} variant="h6" noWrap component="div">
                        {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
