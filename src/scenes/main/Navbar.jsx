import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { setLiveClass, setPreviousClass, unSetLiveClass, unSetPreviousClass } from '../../store/studentClass';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/Logo.png'


const drawerWidth = 240;



function DrawerAppBar(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // React.useEffect(() => {
    //     console.log('useEffect Worked')
    //     console.log(props)
    //   console.log(props.scrollTop)

    // }, [])
    

    // navigation items
    const navItems = [
        {
            title: 'Home',
            myAction: () => {
                navigate('/')
            }
        },
        {
            title: 'About',
            myAction: () => {
                navigate('#')
            }
        },
        {
            title: 'Register',
            myAction: () => {
                navigate('/register')
            }
        },
        {
            title: 'Login',
            myAction: () => {
                navigate('/login')
            }
        },
        {
            title: 'Contact',
            myAction: () => {
                navigate('#')
            }
        }

    ]

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img src={Logo} alt="logo" style={{ height: '6rem', width: '8rem' }} />
            <Divider />
            <List>
                {navItems.map((item, val) => (
                    <ListItem key={val} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={item.myAction}>
                            <ListItemText primary={item.title} sx={{ color: '#7f18c8' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;






    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar component="nav" position='fixed' sx={{ backgroundColor: '#fff', boxShadow: 'none', maxHeight: '10vh' }}>
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            Insight
          </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
                        <img src={Logo} alt="logo" style={{ height: '4rem', width: '6rem' }} />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, val) => (
                            <Button key={val} sx={{ color: '#7f18c8' }} onClick={item.myAction} size="small">
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
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
            </Box>
            <Box component="main" sx={{ p: 1 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;