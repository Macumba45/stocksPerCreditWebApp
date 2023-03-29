import * as Yup from 'yup';
import {UserRole} from '../../models/user';

export const validationSchema = Yup.object().shape({
     name: Yup.string()
          .min(4, 'Too Short!')
          .max(25, 'Too Long!')
          .required('Name is required'),
     lastName: Yup.string()
          .min(4, 'Too Short!')
          .max(40, 'Too Long!')
          .required('Lastname is required'),
     email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
     country: Yup.string().min(4, 'Too Short!').max(20, 'Too Long!'),
     city: Yup.string()
          .min(4, 'Too Short!')
          .max(25, 'Too Long!')
          .required('City is required'),
     phone: Yup.number().required('Phone is required'),
});

export const initialValues = {
     name: '',
     lastName: '',
     userRol: UserRole.ENTREPRENEUR,
     email: '',
     country: '',
     city: '',
     phone: '',
     password: '',
};
