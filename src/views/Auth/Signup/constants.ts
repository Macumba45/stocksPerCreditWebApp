import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
     name: Yup.string()
          .min(4, 'Too Short!')
          .max(16, 'Too Long!')
          .required('Name is required'),
     lastname: Yup.string()
          .min(4, 'Too Short!')
          .max(16, 'Too Long!')
          .required('Lastname is required'),
     role: Yup.string().oneOf(['emprendedor', 'inversor'], 'Role is required'),
     email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
     country: Yup.string()
          .min(4, 'Too Short!')
          .max(16, 'Too Long!')
          .required('Country is required'),
     city: Yup.string()
          .min(4, 'Too Short!')
          .max(16, 'Too Long!')
          .required('City is required'),
     phone: Yup.number().required('Phone is required'),
     password: Yup.string()
          .min(4, 'Too Short!')
          .max(8, 'Too Long!')
          .required('Password is required'),
});

export const initialValues = {
     name: '',
     lastname: '',
     role: '',
     email: '',
     country: '',
     city: '',
     phone: '',
     password: '',
};
