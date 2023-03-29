import {AccountCircle} from '@mui/icons-material';
import {Avatar} from '@mui/joy';
import {Menu, MenuItem} from '@mui/material';
import {FC, memo, useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const UserAvatar: FC = () => {
     const navigate = useNavigate();
     const [anchorEl, setAnchorEl] = useState(null);

     const handleMenuOpen = (event: any) => {
          setAnchorEl(event.currentTarget);
     };

     const handleMenuClose = () => {
          setAnchorEl(null);
     };

     const handleLogout = useCallback(() => {
          window.localStorage.clear();
          navigate('/welcome');
     }, [navigate]);

     return (
          <>
               <Avatar
                    variant="solid"
                    sx={{height: 40}}
                    onClick={handleMenuOpen}
               >
                    <AccountCircle />
               </Avatar>
               <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
               >
                    {/* <MenuItem onClick={handleMenuClose}>My profile</MenuItem> */}
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
               </Menu>
          </>
     );
};

export default memo(UserAvatar);
