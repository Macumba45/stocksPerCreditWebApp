import { normalizeTag, Tag } from '../../models/tag';
import { getAuthenticatedToken } from '../storage/token';

export type TagResponse = {
     id: string;
     name: string;
};


const tags: Tag[] = [
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ba',
          name: 'Desarrollo',
     },
     {
          id: 'bf58b6e2-61f3-42dd-b0a8-c1dbf477ea17',
          name: 'Desarrollo móvil',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709bc',
          name: 'Inteligencia Artificial',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709be',
          name: 'Machine Learning',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709bf',
          name: 'Ciencia de datos',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ab',
          name: 'Base de datos',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709aa',
          name: 'Ciberseguridad',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ab',
          name: 'Base de datos',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ab',
          name: 'Base de datos',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ab',
          name: 'Base de datos',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ab',
          name: 'Base de datos',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ab',
          name: 'Base de datos',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ab',
          name: 'Base de datos',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ab',
          name: 'Base de datos',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ab',
          name: 'Base de datos',
     },
];
const BASE_API_URL = 'http://localhost:8000/tags';

export const getTags = async () => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(BASE_API_URL, {
               headers: {
                    Authorization: `Bearer ${token}`,
               },
          });
          const data: TagResponse[] = await response.json();
          if (!data || data.length <= 0) {
               return tags
          }
          return data.map(normalizeTag);
     } catch (error) {
          console.log((error as Error).message);
     }
     return [];
};

