import {normalizeProjectCard, ProjectCard} from '../../models/project';
import {getAuthenticatedToken} from '../../services/storage/token';

export type ProjectCardResponse = {
     id: string;
     image: string;
     title: string;
     description: string;
     country: string;
     city: string;
     categories: string;
     collected: string;
     investors: string;
     minimuminvestment: number;
     goals: number;
     limitvalue: number;
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
          const data: ProjectCardResponse[] = await response.json();
          return data.map(normalizeProjectCard);
     } catch (error) {
          console.log((error as Error).message);
     }
     return [];
};

export const getProjectById = async (
     id: string
): Promise<ProjectCard | null> => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_API_URL}/${id}`, {
               method: 'GET',
               headers: {Authorization: `Bearer ${token}`},
          });
          const data: ProjectCardResponse = await response.json();
          return normalizeProjectCard(data);
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

export const createProject = async (data: Omit<ProjectCard, 'id'>) => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(BASE_API_URL, {
               method: 'POST',
               headers: {Authorization: `Bearer ${token}`},
               body: JSON.stringify(data),
          });
          const project: ProjectCardResponse = await response.json();
          return normalizeProjectCard(project);
     } catch (error) {
          console.log((error as Error).message);
     }
};
