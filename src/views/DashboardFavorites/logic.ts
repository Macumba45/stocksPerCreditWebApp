import {useCallback, useEffect, useState} from 'react';
import {ProjectResponse} from '../../services/api/project';
import {getUserFavorites, togglePostFav} from '../../services/api/user';
import {getAuthenticatedToken} from '../../services/storage/token';

export const FavoriteViewLogic = () => {
     const [favoriteData, setfavoriteData] = useState<ProjectResponse>();

     const getFavorites = useCallback(async () => {
          getAuthenticatedToken();
          const data = await getUserFavorites();
          if (data) {
               setfavoriteData(data);
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
            toggleFavorite
     };
};
