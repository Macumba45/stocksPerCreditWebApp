import { ProjectResponse } from '../services/api/project';

export type ProjectInput = {
     id: string;
     title: string;
     description: string;
     url: string;
     duration: string;
     totalInvest: number;
     totalInvestor: number;
     country: string;
     city: string;
     history: string;
     commerce: string;
     proposal: string;
     images: string;
     currency: string;
     cost: number;
     minimuminvestment: number;
     actionPerCredit: string;
     returnInvestment: number;
     goal: number;
     tags: string;
     limitvalue: number;
     createdAt: Date;
     updatedAt: Date;
};

export const normalizeProject = (input: ProjectResponse) => {
     return {
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
          goals: input?.goals || '',
          tags: input?.tags || '',
          limitvalue: input?.limitvalue || '',
     };
};

export type Project = ReturnType<typeof normalizeProject>;
