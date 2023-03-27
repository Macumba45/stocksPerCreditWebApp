import { FC, memo, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { LogoStocks } from './styles';

const logo = require('./assets/logo.png');

const pages = [
     { label: 'Login', route: '/login' },
     { label: 'Signup', route: '/signup' },
];

const pagesLogged = [{ label: 'Dashboard', route: '/dashboard' }];
const settings = [
     { label: 'Profile', route: '/profile' },
     { label: 'Logout', route: '/logout' },
];

const NavBarStyles = {
     my: 2,
     color: 'white',
     display: 'block',

}

const NavBar: FC = () => {
     const navigate = useNavigate();
     const [token] = useState<string | null>(
          window.localStorage.getItem('token')
     );
     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
     const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
     const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

     const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
          setAnchorElNav(event.currentTarget);
     };
     const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
          setAnchorElUser(event.currentTarget);
     };

     const handleCloseNavMenu = () => {
          setAnchorElNav(null);
     };

     const handleCloseUserMenu = () => {
          setAnchorElUser(null);
     };
     const handleClickSetting = (route: any) => {
          navigate(route);
          if (route === '/logout') {
               window.localStorage.clear();
               navigate('/login');
          }
     };

     useEffect(() => {
          if (token) {
               setIsAuthenticated(true);
          }
     }, [token]);

     if (isAuthenticated) {
          return (
               <AppBar
                    position="fixed"
                    sx={{ top: 0, backgroundColor: ' #222222' }}
               >
                    <Container>
                         <Toolbar disableGutters>
                              <Box
                                   sx={{
                                        flexGrow: 1,
                                        display: { xs: 'flex', md: 'none' },
                                   }}
                              >
                                   <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                   >
                                        <MenuIcon />
                                   </IconButton>
                                   <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                             vertical: 'bottom',
                                             horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                             vertical: 'top',
                                             horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                             display: { xs: 'block', md: 'none' },
                                        }}
                                   >
                                        {pagesLogged.map(({ label, route }) => (
                                             <MenuItem
                                                  key={label}
                                                  onClick={() =>
                                                       handleClickSetting(route)
                                                  }
                                             >
                                                  <Typography textAlign="center">
                                                       {label}
                                                  </Typography>
                                             </MenuItem>
                                        ))}
                                   </Menu>
                              </Box>
                              <LogoStocks src={`${logo}`} />
                              <Typography
                                   variant="h6"
                                   noWrap
                                   component="a"
                                   href="/"
                                   sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        backgroundImage: `${logo}`,
                                   }}
                              >
                                   Stocks
                              </Typography>
                              {/* <LogoStocks
                            src={`${logo}`}

                        /> */}
                              <Typography
                                   variant="h5"
                                   noWrap
                                   component="a"
                                   href=""
                                   sx={{
                                        mr: 2,
                                        display: { xs: 'flex', md: 'none' },
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                   }}
                              >
                                   Stocks
                              </Typography>

                              <Box
                                   sx={{
                                        flexGrow: 1,
                                        display: { xs: 'none', md: 'flex' },
                                   }}
                              >
                                   {pagesLogged.map(({ label, route }) => (
                                        <Button
                                             key={label}
                                             onClick={() =>
                                                  handleClickSetting(route)
                                             }
                                             style={NavBarStyles}

                                        >
                                             {label}
                                        </Button>
                                   ))}
                              </Box>
                              <Box sx={{ flexGrow: 0 }}>
                                   <Tooltip title="">
                                        <IconButton
                                             onClick={handleOpenUserMenu}
                                             sx={{ p: 0 }}
                                        >
                                             <Avatar
                                                  alt="Remy Sharp"
                                                  src="/static/images/avatar/2.jpg"
                                             />
                                        </IconButton>
                                   </Tooltip>
                                   <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                             vertical: 'top',
                                             horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                             vertical: 'top',
                                             horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                   >
                                        {settings.map(({ label, route }) => (
                                             <MenuItem
                                                  key={label}
                                                  onClick={() =>
                                                       handleClickSetting(route)
                                                  }
                                             >
                                                  <Typography textAlign="center">
                                                       {label}
                                                  </Typography>
                                             </MenuItem>
                                        ))}
                                   </Menu>
                              </Box>
                         </Toolbar>
                    </Container>
               </AppBar>
          );
     } else {
          return (
               <AppBar
                    position="fixed"
                    sx={{ top: 0, backgroundColor: ' #222222' }}
               >
                    <Container maxWidth="xl">
                         <Toolbar disableGutters>
                              <LogoStocks src={`${logo}`} />

                              <Typography
                                   variant="h6"
                                   noWrap
                                   component="a"
                                   href="/"
                                   sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        flexGrow: 20,
                                        flexDirection: 'flex-end',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                   }}
                              >
                                   Stocks
                              </Typography>

                              <Box
                                   sx={{
                                        flexGrow: 1,
                                        display: { xs: 'flex', md: 'none' },
                                   }}
                              >
                                   <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                   >
                                        <MenuIcon />
                                   </IconButton>
                                   <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                             vertical: 'bottom',
                                             horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                             vertical: 'top',
                                             horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                             display: { xs: 'block', md: 'none' },
                                        }}
                                   >
                                        {pages.map(({ label, route }) => (
                                             <MenuItem
                                                  key={label}
                                                  onClick={() =>
                                                       handleClickSetting(route)
                                                  }
                                             >
                                                  <Typography textAlign="center">
                                                       {label}
                                                  </Typography>
                                             </MenuItem>
                                        ))}
                                   </Menu>
                              </Box>
                              <Typography
                                   variant="h5"
                                   noWrap
                                   component="a"
                                   href=""
                                   sx={{
                                        mr: 2,
                                        display: { xs: 'flex', md: 'none' },
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                   }}
                              >
                                   Stocks
                              </Typography>
                              <Box
                                   sx={{
                                        flexGrow: 1,
                                        display: { xs: 'none', md: 'flex' },
                                   }}
                              >
                                   {pages.map(({ label, route }) => (
                                        <Button
                                             key={label}
                                             onClick={() =>
                                                  handleClickSetting(route)
                                             }
                                             sx={{
                                                  my: 2,
                                                  color: 'white',
                                                  display: 'block',
                                             }}
                                        >
                                             {label}
                                        </Button>
                                   ))}
                              </Box>
                         </Toolbar>
                    </Container>
               </AppBar>
          );
     }
};

export default memo(NavBar);
