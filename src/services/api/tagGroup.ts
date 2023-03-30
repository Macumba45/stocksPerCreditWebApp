import {normalizeTag, Tag} from '../../models/tag';
import {getAuthenticatedToken} from '../storage/token';

export type TagGroupResponse = {
     id: string;
     name: string;
};

const tags: Tag[] = [
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709ba',
          name: 'EDUCACION',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709bc',
          name: 'BANCA',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709bd',
          name: 'LIGAR',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709be',
          name: 'DEPORTE',
     },
     {
          id: '30586561-a0dd-4ac5-9658-94e6831709bf',
          name: 'ESTILO DE VIDA',
     },
     {
          id: 'bf58b6e2-61f3-42dd-b0a8-c1dbf477ea17',
          name: 'ALIMENTACION',
     },
];
const BASE_API_URL = 'http://localhost:8000/tagGroups';

export const getTagsGroup = async () => {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(BASE_API_URL, {
               headers: {
                    Authorization: `Bearer ${token}`,
               },
          });
          const data: TagGroupResponse[] = await response.json();
          if (!data || data.length <= 0) {
               return tags;
          }
          return data.map(normalizeTag);
     } catch (error) {
          console.log((error as Error).message);
     }
     return [];
};
