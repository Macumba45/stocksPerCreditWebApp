import {normalizeProject, Project, ProjectInput} from '../../models/project';
import {getAuthenticatedToken} from '../../services/storage/token';
import {TagResponse} from './tag';

const BASE_API_URL = 'http://localhost:8000/projects';

export type ProjectResponse = {
     id: string;
     title: string;
     description: string;
     url: string;
     duration: string;
     totalInvest: number; // Modificación aquí
     totalInvestor: number; // Modificación aquí
     country: string;
     city: string;
     history: string;
     commerce: string;
     proposal: string;
     images: string;
     currency: string;
     cost: string | number;
     minimuminvestment: number;
     actionPerCredit: string;
     returnInvestment: number;
     goal: number;
     tags: TagResponse[];
     ProjectTag?: TagResponse[];
     limitvalue: number;
     current: number;
     min: number;
     max: number;
     createdAt: Date;
     updatedAt: Date;
};

export type InvestDashboardResponse = {
     topProjects: ProjectResponse[];
     latestProjects: ProjectResponse[];
     closeSoonProjects: ProjectResponse[];
};


export const getProjectById = async (id: string): Promise<Project | null> => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_API_URL}/${id}`, {
               method: 'GET',
               headers: {Authorization: `Bearer ${token}`},
          });
          const data: ProjectResponse = await response.json();
          return normalizeProject(data);
     } catch (error) {
          console.log((error as Error).message);
     }
     return null;
};

export const removeProject = async (id: string) => {
     try {
          const token = getAuthenticatedToken();
          await fetch(`${BASE_API_URL}/${id}`, {
               method: 'DELETE',
               headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
               },
          });
     } catch (error) {
          console.log((error as Error).message);
     }
};

export const createProject = async (data: ProjectInput) => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(BASE_API_URL, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify(data),
          });
          const project: ProjectResponse = await response.json();
          return normalizeProject(project);
     } catch (error) {
          console.log((error as Error).message);
     }
};

export const updateProject = async (id: string, data: Partial<Project>) => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_API_URL}/${id}`, {
               method: 'PUT',
               headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
          });

          const project: ProjectResponse = await response.json();
          return normalizeProject(project);
     } catch (error) {
          console.log((error as Error).message);
     }
};

export const getGroupedProjects = async () => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_API_URL}/dashboard-investor`, {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
               },
          });
          const data: InvestDashboardResponse = await response.json();

          return {
               topProjects: data?.topProjects?.map(normalizeProject),
               latestProjects: data?.latestProjects?.map(normalizeProject),
               closeSoonProjects:
                   data?.closeSoonProjects?.map(normalizeProject),
          };
     } catch (error) {
          console.log((error as Error).message);
     }
     return null;
};
