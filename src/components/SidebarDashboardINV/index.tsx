import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import Typography from '@mui/material/Typography';
import {FC, memo, useCallback, useState} from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import ProfileDashboard from '../ProfileDashboard';
import {Fab, ListItemButton, Tooltip} from '@mui/material';
import {Home} from '@mui/icons-material';
import Person4Icon from '@mui/icons-material/Person4';
import {
     Container,
     ContainerLogo,
     ContainerProfile,
     LogoImage,
     LogoStocks,
} from './styles';

const drawerWidth = 230;

interface Props {
     /**
      * Injected by the documentation to work in an iframe.
      * You won't need it on your project.
      */
     window?: () => Window;
}

const ResponsiveDrawer: FC = (props: Props) => {
     const {window} = props;
     const logo = require('../NavBar/assets/logo.png');
     const [mobileOpen, setMobileOpen] = useState(false);
     const container =
          window !== undefined ? () => window().document.body : undefined;

     const CustomTooltip = ({title, children}: any) => {
          return (
               <Tooltip title={title} placement="left">
                    {children}
               </Tooltip>
          );
     };

     const navigate = useNavigate();

     const goLanding = useCallback(() => {
          navigate('/');
     }, [navigate]);

     const goProfile = useCallback(() => {
          navigate('/profile');
     }, [navigate]);

     const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
     };

     type IconMapItem = {
          icon: React.ElementType;
          link: string;
     };

     const iconMap: {[key: string]: IconMapItem} = {
          'Stocks Dashboard': {icon: DashboardIcon, link: '/dashboard'},
          'My investments': {icon: PaymentIcon, link: '/dashboard/investments'},
     };

     const listItems = [
          {
               text: 'Favorites',
               icon: <FavoriteIcon />,
               link: '/dashboard/favorites',
          },
          {
               text: 'My Orders',
               icon: <MonetizationOnIcon />,
               link: '/dashboard/orders',
          },
     ];

     const drawer = (
          <Container>
               <ContainerLogo>
                    <LogoStocks to={'/'}>
                         <LogoImage src={logo} />
                    </LogoStocks>
               </ContainerLogo>

               <Divider />
               <List>
                    {Object.entries(iconMap).map(
                         ([text, {icon: IconComponent, link}], index) => (
                              <ListItem
                                   key={index}
                                   disablePadding
                                   sx={{
                                        padding: 1,
                                        marginBottom: 2,
                                        cursor: 'pointer',
                                        '&:hover': {
                                             backgroundColor: '#EEEEEE',
                                             fontFamily: 'Roboto',
                                        },
                                   }}
                                   button
                                   component={Link}
                                   to={link}
                              >
                                   <ListItemIcon
                                        style={{color: 'black'}}
                                        sx={{marginLeft: 2}}
                                   >
                                        {React.createElement(IconComponent)}
                                   </ListItemIcon>
                                   <ListItemText
                                        primary={text}
                                        primaryTypographyProps={{
                                             color: 'black',
                                        }}
                                   />
                              </ListItem>
                         )
                    )}
               </List>
               <Divider />
               <List>
                    {listItems.map((item) => (
                         <ListItem
                              key={item.text}
                              sx={{
                                   padding: 1,
                                   cursor: 'pointer',
                                   '&:hover': {
                                        backgroundColor: '#EEEEEE',
                                        fontFamily: 'Roboto',
                                   },
                              }}
                              disablePadding
                         >
                              <ListItemButton component={Link} to={item.link}>
                                   <ListItemIcon style={{color: 'black'}}>
                                        {item.icon}
                                   </ListItemIcon>
                                   <ListItemText primary={item.text} />
                              </ListItemButton>
                         </ListItem>
                    ))}
               </List>
          </Container>
     );

     return (
          <Box sx={{display: 'flex'}}>
               <CssBaseline />
               <AppBar
                    position="fixed"
                    sx={{
                         width: {sm: `calc(100% - ${drawerWidth}px)`},
                         ml: {sm: `${drawerWidth}px`},
                         backgroundColor: 'white',
                    }}
               >
                    <Toolbar
                         sx={{
                              justifyContent: 'space-between',
                              backgroundColor: 'white',
                              height: '90px',
                              background:
                                   'linear-gradient(90deg, rgba(0,0,0,1) 45%, rgba(126,27,117,1) 100%)',
                         }}
                    >
                         <IconButton
                              color="inherit"
                              aria-label="open drawer"
                              edge="start"
                              onClick={handleDrawerToggle}
                              sx={{mr: 2, display: {sm: 'none'}}}
                         >
                              <MenuIcon />
                         </IconButton>
                         <Typography
                              variant="h6"
                              noWrap
                              component="div"
                              style={{fontFamily: 'Roboto'}}
                              sx={{
                                   '@media screen and (max-width: 800px)': {
                                        display: 'none',
                                   },
                              }}
                         >
                              Stocks - Investor Dashboard
                         </Typography>
                         <CustomTooltip title="Go to Landing">
                              <Fab
                                   onClick={goLanding}
                                   size="small"
                                   sx={{
                                        position: 'fixed',
                                        bottom: '2rem',
                                        right: 0,
                                        marginRight: '2rem',
                                        backgroundColor: '#7E1B75',
                                        '&:hover': {
                                             backgroundColor: '#7e1b7655', // Cambiar color del hover
                                        },
                                   }}
                                   color="secondary"
                                   aria-label="add"
                              >
                                   <Home />
                              </Fab>
                         </CustomTooltip>
                         <CustomTooltip title="Profile">
                              <Fab
                                   onClick={goProfile}
                                   size="small"
                                   sx={{
                                        position: 'fixed',
                                        bottom: '6rem',
                                        right: 0,
                                        marginRight: '2rem',
                                        backgroundColor: '#7E1B75',
                                        '&:hover': {
                                             backgroundColor: '#7e1b7655', // Cambiar color del hover
                                        },
                                   }}
                                   color="primary"
                                   aria-label="add"
                              >
                                   <Person4Icon />
                              </Fab>
                         </CustomTooltip>
                         <ContainerProfile>
                              <ProfileDashboard />
                         </ContainerProfile>
                    </Toolbar>
               </AppBar>
               <Box
                    component="nav"
                    sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
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
                              display: {xs: 'block', sm: 'none'},
                              '& .MuiDrawer-paper': {
                                   boxSizing: 'border-box',
                                   width: drawerWidth,
                                   backgroundColor: 'white',
                              },
                         }}
                    >
                         {drawer}
                    </Drawer>
                    <Drawer
                         variant="permanent"
                         sx={{
                              display: {xs: 'none', sm: 'block'},
                              '& .MuiDrawer-paper': {
                                   boxSizing: 'border-box',
                                   width: drawerWidth,
                                   backgroundColor: 'white',
                              },
                         }}
                         open
                    >
                         {drawer}
                    </Drawer>
               </Box>
               <Box
                    component="main"
                    sx={{
                         flexGrow: 1,
                         p: 3,
                         width: {sm: `calc(100% - ${drawerWidth}px)`},
                    }}
               >
                    <Toolbar />
                    <Typography paragraph></Typography>
                    <Typography paragraph></Typography>
               </Box>
          </Box>
     );
};

export default memo(ResponsiveDrawer);
