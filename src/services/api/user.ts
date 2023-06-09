import {normalizeProject, Project} from '../../models/project';
import {getAuthenticatedToken} from '../storage/token';
import {ProjectResponse} from './project';

export type UserInfoResponse = {
     favorites: ProjectResponse[];
     investment: ProjectResponse[];
};

const BASE_API_URL = 'http://localhost:8000/dashboard';

export const investOnProject = async (invest: { projectId: string; amount: { total: number; }; }) => {
     try {
          const token = getAuthenticatedToken();
          console.log(invest)
          const response = await fetch(`http://localhost:8000/users/invest`, {
               method: 'POST',
               headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(invest),
          });
          const data = await response.json();
          console.log(data)
     } catch (error) {
          console.log((error as Error).message);
     }
}

export const togglePostFav = async (projectId: string) => {
     try {
          const token = getAuthenticatedToken();
          await fetch(`${BASE_API_URL}/toggle-post-fav`, {
               method: 'POST',
               headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json  ',
               },
               body: JSON.stringify({
                    projectId,
               }),
          });
     } catch (error) {
          console.log((error as Error).message);
     }
};

export const getUserInfo = async (): Promise<Project | null> => {
     const token = getAuthenticatedToken();
     const response = await fetch(`${BASE_API_URL}/favorites`, {
          headers: {
               Authorization: `Bearer ${token}`,
               'content-type': 'application/json',
          },
     });

     if (!response.ok) {
          return null;
     }
     const data: ProjectResponse = await response.json();

     return normalizeProject(data);
};


