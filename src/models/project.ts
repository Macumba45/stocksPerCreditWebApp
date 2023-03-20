import {
     ProjectCardResponse,
     ProjectCardDetailsResponse,
} from '../services/project';

export type ProjectCardInput = {
     image: string;
     tiempo: string;
     dinero: string;
     nombre: string;
     categoria: string;
     inversiones: string;
};

export type ProjectCardDetailsInput = {
     categoria: string;
     titulo: string;
     description: string;
     imagenes: string;
};

export const normalizeProjectCard = (input: ProjectCardResponse) => {
     return {
          image: input?.image || '',
          tiempo: input?.tiempo || '',
          dinero: input?.dinero || '',
          nombre: input?.nombre || '',
          categoria: input?.categoria || '',
          inversiones: input?.inversiones || '',
     };
};

export const normalizeProjectCardDetails = (
     input: ProjectCardDetailsResponse
) => {
     return {
          categoria: input?.categoria || '',
          titulo: input?.titulo || '',
          description: input?.description || '',
          imagenes: input?.imagenes || '',
     };
};

export type ProjectCard = ReturnType<typeof normalizeProjectCard>;
export type ProjectCardDetails = ReturnType<typeof normalizeProjectCardDetails>;
