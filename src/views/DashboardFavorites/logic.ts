import {useCallback, useEffect, useState} from 'react';
import {
     getUserInfo,
     togglePostFav,
     UserInfoResponse,
} from '../../services/api/user';
import {getAuthenticatedToken} from '../../services/storage/token';

export const FavoriteViewLogic = () => {
     const [favoriteData, setfavoriteData] = useState<UserInfoResponse>();

     const getFavorites = useCallback(async () => {
          getAuthenticatedToken();
          const data = await getUserInfo();
          if (data) {
               // setfavoriteData(data);
          }
     }, []);

     const toggleFavorite = useCallback(async (id: string) => {
          await togglePostFav(id);
     }, []);

     useEffect(() => {
          getFavorites();
     }, [getFavorites]);

     return {
          getFavorites,
          favoriteData,
          toggleFavorite,
     };
};
