import {} from '../services/api/tag';

export const normalizeTag = (input: any) => {
     return {
          id: input?.title || '',
          name: input?.name || '',
     };
};

export type Tag = ReturnType<typeof normalizeTag>;
