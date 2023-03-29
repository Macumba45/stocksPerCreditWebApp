export type ProfileInput = {
     name: string;
     lastName: string;
     email: string;
     password: string;
     country: string;
     city: string;
     phone: number;
     userRol: string;
};

export const normalizeUser = (input: any) => {
     return {
          id: (input?.id || '') as string,
          name: (input?.name || '') as string,
          lastName: (input?.lastName || '') as string,
          email: (input?.email || '') as string,
          password: (input?.password || '') as string,
          country: (input?.country || '') as string,
          city: (input?.city || '') as string,
          phone: (input?.phone || '') as string,
          userRol: (input?.userRol || '') as string,
     };
};

export type User = ReturnType<typeof normalizeUser>;
