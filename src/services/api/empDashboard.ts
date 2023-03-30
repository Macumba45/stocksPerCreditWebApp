import {getAuthenticatedToken} from '../storage/token';
import type {ProjectResponse} from './project';

export type InvestDashboardResponse = {
     allProjects: ProjectResponse[];
     topProjects: ProjectResponse[];
     latestProjects: ProjectResponse[];
     closeSoonProjects: ProjectResponse[];
};

const BASE_API_URL = 'http://localhost:8000/dashboard/entrepreneur';

export const getProjectsUser = async () => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_API_URL}`, {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
               },
          });
          const data: ProjectResponse[] = await response.json();
          return data;
     } catch (error) {
          console.log((error as Error).message);
     }
     return null;
};
