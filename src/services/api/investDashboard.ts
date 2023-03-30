import {getAuthenticatedToken} from '../storage/token';
import {normalizeProject, ProjectFilters} from '../../models/project';
import type {ProjectResponse} from './project';

const BASE_API_URL = 'http://localhost:8000/dashboard/investor';

export const getInvestorProjects = async (filters?: ProjectFilters) => {
     try {
          const token = getAuthenticatedToken();
          let queryParams = '';
          if (filters) {
               if (filters.date) {
                    queryParams += `date=${filters.date}&`;
               }
               if (filters.tags) {
                    queryParams += `tags=${filters.tags.join(',')}&`;
               }
               if (filters.investmentAmount) {
                    queryParams += `investmentAmount={"min":${filters.investmentAmount.min},"max":${filters.investmentAmount.max}}`;
               }
          }

          const response = await fetch(`${BASE_API_URL}?${queryParams}`, {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
               },
          });
          const data: ProjectResponse[] = await response.json();

          return data.map(normalizeProject);
     } catch (error) {
          console.log((error as Error).message);
     }
     return [];
};
