import {} from '../services/api/tag';

export const normalizeTagGroup = (input: any) => {
     return {
          id: input?.id || '',
          name: input?.name || '',
     };
};

export type Tag = ReturnType<typeof normalizeTagGroup>;
