import { UserRole } from "../../../models/user";

export type SignUpProps = {
     name: string;
     email: string;
     password: string;
     lastname: string;
     role: UserRole;
     country: string;
     city: string;
     phone: string;
};

export type FieldProps = {
     field: {
          value: string;
          name: string;
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
          onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
     };
     meta: {
          error?: string;
          touched: boolean;
     };
};
