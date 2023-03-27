import {ProjectCardResponse} from '../services/api/project';

export type ProjectCardInput = {
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

export const normalizeProjectCard = (input: ProjectCardResponse) => {
     return {
          image: input?.image || '',
          title: input?.title || '',
          description: input?.description || '',
          country: input?.country || '',
          city: input?.city || '',
          categories: input?.categories || '',
          collected: input?.collected || '',
          investors: input?.investors || '',
          minimuminvestment: input?.minimuminvestment || '',
          goals: input?.goals || '',
          limitvalue: input?.limitvalue || '',
     };
};



export type ProjectCard = ReturnType<typeof normalizeProjectCard>;
