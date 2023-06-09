import {ProjectResponse} from '../services/api/project';
import {normalizeTag} from './tag';

export type ProjectInput = {
     title: string;
     description: string;
     url: string;
     duration: string;
     country: string;
     city: string;
     history: string;
     commerce: string;
     proposal: string;
     currency: string;
     cost: number;
     minimuminvestment: number;
     actionPerCredit: string;
     ReturnOnInvestment: number;
     goal: number;
     tags: string[];
};

export type ProjectFilters = {
     date?: string;
     investmentAmount?: {
          min?: number;
          max?: number;
     };
     tags?: string[];
};

export const normalizeProject = (input: ProjectResponse) => {
     return {
          id: input?.id || '',
          title: input?.title || '',
          description: input?.description || '',
          url: input?.url || '',
          duration: input?.duration || '',
          totalInvest: input?.totalInvest || 0,
          totalInvestor: input?.totalInvestor || 0,
          country: input?.country || '',
          city: input?.city || '',
          history: input?.history || '',
          commerce: input?.commerce || '',
          proposal: input?.proposal || '',
          images: input?.images || '',
          currency: input?.currency || '',
          cost: input?.cost || 0,
          minimuminvestment: input?.minimuminvestment || 0,
          actionPerCredit: input?.actionPerCredit || '',
          returnInvestment: input?.returnInvestment || 0,
          goal: input?.goal || 0,
          tags: input?.tags ? input.tags.map(normalizeTag) : [],
          limitvalue: input?.limitvalue || 0,
          current: input?.current || 0,
          min: input?.min || 0,
          max: input?.max || 0,
          ProjectTag: input?.ProjectTag?.map(normalizeTag) || [],
          createdAt: input?.createdAt || new Date(),
          updatedAt: input?.updatedAt || new Date(),
     };
};

export type Project = ReturnType<typeof normalizeProject>;
