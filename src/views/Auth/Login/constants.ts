import * as Yup from 'yup';
import { UserRole } from '../../../models/user';

export const validationSchema = Yup.object().shape({
     email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),

     password: Yup.string()
          .min(4, 'Too Short!')
          .max(16, 'Too Long!')
          .required('Password is required'),
     role: Yup.string().required('Role is required'),
});

export const initialValues = {
     email: '',
     password: '',
     role: UserRole.ENTREPRENEUR,
}