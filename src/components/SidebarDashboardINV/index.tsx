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
import {FC, memo, useState} from 'react';
import React from 'react';
import {Container, ContainerLogo, ContainerProfile, LogoStocks} from './styles';
import {Link} from 'react-router-dom';
import ProfileDashboard from '../ProfileDashboard';
import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
     drawer: {
       width: drawerWidth,
       flexShrink: 0,
       backgroundColor: 'red' // Cambia el color de fondo a rojo
     },
     drawerPaper: {
       width: drawerWidth,
       backgroundColor: 'red' // Cambia el color de fondo a rojo
     },
     toolbar: theme.mixins.toolbar,
   }));

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
          'Stocks Dashboard': {icon: DashboardIcon, link: '/dashboard'},
          'My investments': {icon: PaymentIcon, link: '/dashboard/investments'},
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
                                             fontFamily:'Proxima Nova'
                                        },
                                   }}
                                   button
                                   component={Link}
                                   to={link}
                              >
                                   <ListItemIcon style={{color: 'white',}} sx={{marginLeft: 2}}>
                                        {React.createElement(IconComponent)}
                                   </ListItemIcon>
                                   <ListItemText primary={text} primaryTypographyProps={{ color: 'white' }} />
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
                         sx={{justifyContent: 'space-between',backgroundColor:'#343a40', height: '90px'}}
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
                              style={{fontFamily:'Proxima Nova'}}
                              sx={{
                                   '@media screen and (max-width: 800px)': {
                                        display: 'none',
                                   },
                              }}
                         >
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
                                   backgroundColor:'#343a40'

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
