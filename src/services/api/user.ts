import {getAuthenticatedToken} from '../storage/token';

const BASE_API_URL = 'http://localhost:8000/users';

export const togglePostFav = async (projectId: string) => {
     try {
          const token = getAuthenticatedToken();
          await fetch(`${BASE_API_URL}/toggle-post-fav`, {
               method: 'POST',
               headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    projectId,
               }),
          });
     } catch (error) {
          console.log((error as Error).message);
     }
};
