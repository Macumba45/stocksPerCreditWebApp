export type ProfileInput = {
     name: string;
     lastname: string;
     email: string;
     country: string;
     city: string;
     phone: string;
     avatar: string;
};

export enum UserRole {
     INVESTOR = 'INVESTOR',
     ENTREPRENEUR = 'ENTREPRENEUR',
}

export const normalizeProfile = (input: any) => {
     return {
          name: (input?.name || '') as string,
          lastName: (input?.lastName || '') as string,
          email: (input?.email || '') as string,
          country: (input?.country || '') as string,
          city: (input?.city || '') as string,
          phone: (input?.phone || '') as string,
          avatar: (input?.avatar || '') as string,
          id: (input?.id || '') as string,
     };
};

export type Profile = ReturnType<typeof normalizeProfile>;
