import {getAuthenticatedToken} from '../storage/token';
import {normalizeProject, ProjectFilters} from '../../models/project';
import type {ProjectResponse} from './project';

export type InvestDashboardResponse = {
     allProjects: ProjectResponse[];
     topProjects: ProjectResponse[];
     latestProjects: ProjectResponse[];
     closeSoonProjects: ProjectResponse[];
};

const BASE_API_URL = 'http://localhost:8000/projects/dashboard-investor';

export const getProjects = async (filters?: ProjectFilters) => {
     try {
          const token = getAuthenticatedToken();
          let queryParams = '';
          if (filters) {
               if (filters.date) {
                    queryParams += `date=${filters.date}&`;
               }
               if (filters.tags) {
                    queryParams += `tags=[${filters.tags}]&`;
               }
               if (filters.investmentAmount) {
                    queryParams += `investmentAmount={min:${filters.investmentAmount.min},max:${filters.investmentAmount.max}}`;
               }
          }

          const response = await fetch(`${BASE_API_URL}?${queryParams}`, {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
               },
          });
          const data: InvestDashboardResponse = await response.json();

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
