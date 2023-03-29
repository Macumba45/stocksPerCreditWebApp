import {normalizeUser, User} from '../../models/profile';
import {getAuthenticatedToken} from '../../services/storage/token';

export type ProfileResponse = {
     id: string;
     name: string;
     lastName: string;
     email: string;
     password: string;
     country: string;
     city: string;
     phone: number;
     userRol: string;
     salt: string;
     createdAt: string;
     updatedAt: string;
};

const BASE_API_URL = 'http://localhost:8000/users/profile';

export const getUserInfo = async (): Promise<User | null> => {
     const token = getAuthenticatedToken();
     const response = await fetch(BASE_API_URL, {
          headers: {
               Authorization: `Bearer ${token}`,
               'content-type': 'application/json',
          },
     });

     if (!response.ok) {
          return null;
     }
     const data = await response.json();
     return normalizeUser(data);
};

//   export const getUserFavorites = async (): Promise<UserFavorites | null> => {
//     const token = getAuthenticatedToken();
//     const response = await fetch(BASE_API_URL_FAVS, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "content-type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       return null;
//     }
//     const data: FavoritesResponse = await response.json();

//     return normalizeUserFavorites(data);
//   };
