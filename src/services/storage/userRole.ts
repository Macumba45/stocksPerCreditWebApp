import { UserRole } from '../../models/user';

const USER_ROLE_KEY = 'user-role';

export const getUserRole = () => {
     try {
          const userRole = window.localStorage.getItem(USER_ROLE_KEY);
          return userRole ? JSON.parse(userRole) : null;
     } catch (error) {
          console.log(error);
     }
};

export const setUserRole = (role: UserRole) => {
     window.localStorage.setItem(USER_ROLE_KEY, JSON.stringify(role));
};
