import { getAuthenticatedToken } from '../storage/token';
import { normalizeProject } from '../../models/project';
import { ProjectResponse } from './project';

export type InvestDashboardResponse = {
     allProjects: ProjectResponse[];
     topProjects: ProjectResponse[];
     latestProjects: ProjectResponse[];
     closeSoonProjects: ProjectResponse[];
};

const BASE_API_URL = 'http://localhost:8000/projects/dashboard-investor';

export const getProjects = async () => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(BASE_API_URL, {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
               },
          });
          const data: InvestDashboardResponse = await response.json();
          console.log(data);

          const values = {
               allProjects: data?.allProjects?.map(normalizeProject),
               topProjects: data?.topProjects?.map(normalizeProject),
               latestProjects: data?.latestProjects?.map(normalizeProject),
               closeSoonProjects:
                    data?.closeSoonProjects?.map(normalizeProject),
          };

          return values;
     } catch (error) {
          console.log((error as Error).message);
     }
     return null;
};
