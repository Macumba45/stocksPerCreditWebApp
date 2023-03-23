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
import FeedIcon from '@mui/icons-material/Feed';
import Typography from '@mui/material/Typography';
import {FC, memo, useState} from 'react';
import React from 'react';
import {Container, ContainerLogo, ContainerProfile, LogoStocks} from './styles';
import {Link} from 'react-router-dom';
import ProfileDashboard from '../ProfileDashboard';

const drawerWidth = 240;

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

     const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
     };

     type IconMapItem = {
          icon: React.ElementType;
          link: string;
     };

     const iconMap: {[key: string]: IconMapItem} = {
          'Stocks Dashboard': {icon: DashboardIcon, link: '/dashboardinv'},
          'My investments': {
               icon: PaymentIcon,
               link: '/dashboardinv/investments',
          },
          Projects: {icon: FeedIcon, link: '/dashboardinv/projects'},
     };

     const drawer = (
          <Container>
               <ContainerLogo>
                    <LogoStocks src={logo} />
               </ContainerLogo>

               <Divider />
               <List>
                    {Object.entries(iconMap).map(
                         ([text, {icon: IconComponent, link}], index) => (
                              <ListItem
                                   key={text}
                                   disablePadding
                                   sx={{
                                        padding: 1,
                                        marginBottom: 2,
                                        cursor: 'pointer',
                                        '&:hover': {
                                             backgroundColor: 'lightgray',
                                        },
                                   }}
                                   button
                                   component={Link}
                                   to={link}
                              >
                                   <ListItemIcon sx={{marginLeft: 2}}>
                                        {React.createElement(IconComponent)}
                                   </ListItemIcon>
                                   <ListItemText primary={text} />
                              </ListItem>
                         )
                    )}
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
                         backgroundColor: '#343a40',
                    }}
               >
                    <Toolbar
                         sx={{justifyContent: 'space-between', height: '80px'}}
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
                              sx={{
                                   '@media screen and (max-width: 800px)': {
                                        display: 'none',
                                   },
                              }}
                         >
                              Stocks Dashboard - Investor
                         </Typography>
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
