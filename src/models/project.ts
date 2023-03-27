import {ProjectResponse} from '../services/api/project';
import { normalizeTag } from './tag';

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
     returnInvestment: number;
     goal: number;
     tags: string[];  
};

export const normalizeProject = (input: ProjectResponse) => {
     return {
          id: input?.id || '',
          title: input?.title || '',
          description: input?.description || '',
          url: input?.url || '',
          duration: input?.duration || '',
          totalInvest: input?.totalInvest || '',
          totalInvestor: input?.totalInvestor || '',
          country: input?.country || '',
          city: input?.city || '',
          history: input?.history || '',
          commerce: input?.commerce || '',
          proposal: input?.proposal || '',
          images: input?.images || '',
          currency: input?.currency || '',
          cost: input?.cost || '',
          minimuminvestment: input?.minimuminvestment || '',
          actionPerCredit: input?.actionPerCredit || '',
          returnInvestment: input?.returnInvestment || '',
          goal: input?.goal || '',
          tags: input?.tags ? input.tags.map(normalizeTag) : [] ,
          limitvalue: input?.limitvalue || '',
          createdAt: input?.createdAt || new Date(),
          updatedAt: input?.updatedAt || new Date(),
     };
};

export type Project = ReturnType<typeof normalizeProject>;
