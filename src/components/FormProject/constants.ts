import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
     image: Yup.string().required('The image field is required'),
     name: Yup.string().required('The image field is required'),
     history: Yup.string().required('The image field is required'),
     country: Yup.string().required('The image field is required'),
     city: Yup.string().required('The image field is required'),
     description: Yup.string().required('The image field is required'),


     goal: Yup.string().required('The image field is required'),
     miniInvest: Yup.string().required('The image field is required'),
     totalInvest: Yup.string().required('The image field is required'),
     currency: Yup.string().required('The image field is required'),
     actionPerCredit: Yup.string().required('The image field is required'),
     cost: Yup.string().required('The image field is required'),
     commerce: Yup.string().required('The image field is required'),

     duration: Yup.string().required('The image field is required'),
     proposal: Yup.string().required('The image field is required'),

});

export const initialValues = {
     image: '',
     name: '',
     goal: '',
     miniInvest: '',
     totalInvest: '',
     actionPerCredit: '',
     currency: '',
     duration: '',
     history: '',
     proposal: '',
     cost: '',
     commerce: '',
     country: '',
     city: '',
     description: '',
    
};
