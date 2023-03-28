import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { useState, useCallback, useEffect } from 'react';
import { getUserInfo } from '../../services/api/profile';
import { useNavigate } from 'react-router-dom';
import { User } from '../../models/profile';

export default function FolderList() {
    const [userinfo, setUserInfo] = useState<User | null>(null);
    const [isloading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
  
    const getProfileInfo = useCallback(async () => {
      setIsLoading(true);
      const userprofile = await getUserInfo();
      console.log('esto es el userprofile' + userprofile)
      setUserInfo(userprofile);
      setIsLoading(false);
    }, []);
  
    const goToBack = useCallback(() => {
      navigate('/dashboard', { replace: true });
    }, [navigate]);
  
    useEffect(() => {
      getProfileInfo();
    }, [getProfileInfo]);
  
    if (isloading) {
      return <div>LOADING</div>;
    }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary={userinfo?.name} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Id" secondary={userinfo?.id} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="LastName" secondary={userinfo?.lastName} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="EMAIL" secondary={userinfo?.email} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Country" secondary={userinfo?.country} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="City" secondary={userinfo?.city} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary={userinfo?.phone} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Rol" secondary={userinfo?.userRol} />
      </ListItem>
    </List>
  );
}

