import { normalizeProject, Project, ProjectInput } from '../../models/project';
import { getAuthenticatedToken } from '../../services/storage/token';
import { TagResponse } from './tag';

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
     limitvalue: number;
     current: number;
     min: number;
     max: number;
     createdAt: Date;
     updatedAt: Date;
};

const BASE_API_URL = 'http://localhost:8000/projects';

export const getProjects = async () => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(BASE_API_URL, {
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

export const getProjectById = async (id: string): Promise<Project | null> => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_API_URL}/${id}`, {
               method: 'GET',
               headers: { Authorization: `Bearer ${token}` },
          });
          const data: ProjectResponse = await response.json();
          console.log(data);
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
               headers: { Authorization: `Bearer ${token}` },
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
          console.log({ data });
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
          console.log({ project });
          return normalizeProject(project);
     } catch (error) {
          console.log((error as Error).message);
     }
};

export const getLatestProjects = async (
     id: string
): Promise<Project | null> => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_API_URL}/latest`, {
               method: 'GET',
               headers: { Authorization: `Bearer ${token}` },
          });
          const data: ProjectResponse = await response.json();
          return normalizeProject(data);
     } catch (error) {
          console.log((error as Error).message);
     }
     return null;
};

export const getTopProjects = async (id: string): Promise<Project | null> => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_API_URL}/top-project`, {
               method: 'GET',
               headers: { Authorization: `Bearer ${token}` },
          });
          const data: ProjectResponse = await response.json();
          return normalizeProject(data);
     } catch (error) {
          console.log((error as Error).message);
     }
     return null;
};

export const getSuccesProjects = async (
     id: string
): Promise<Project | null> => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_API_URL}/success`, {
               method: 'GET',
               headers: { Authorization: `Bearer ${token}` },
          });
          const data: ProjectResponse = await response.json();
          return normalizeProject(data);
     } catch (error) {
          console.log((error as Error).message);
     }
     return null;
};

// export const getTotalAmountProjects = async (
//      id: string
// ): Promise<ProjectDetail | null> => {
//      try {
//           const token = getAuthenticatedToken();
//           const response = await fetch(`${BASE_API_URL}/totalamount`, {
//                method: 'GET',
//                headers: {Authorization: `Bearer ${token}`},
//           });
//           const data: ProjectDetailResponse = await response.json();
//           return normalizeProjectCard(data);
//      } catch (error) {
//           console.log((error as Error).message);
//      }
//      return null;
// };
