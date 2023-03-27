import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
     image: Yup.string().required('The image field is required'),
     name: Yup.string().required('You need a name to create your project'),
     country: Yup.string().required('Indicate your country'),
     city: Yup.string().required('Indicate your city'),

     history: Yup.string().required('Explain your start with a brief history'),
     description: Yup.string().required('Write a brief description'),
     proposal: Yup.string().required('write down your proposal'),
     duration: Yup.string().required('Write how long you want your project to last'),
     commerce: Yup.string().required('The image field is required'),

     goal: Yup.string().required('Write your goal'),
     currency: Yup.string().required('The image field is required'),
     cost: Yup.string().required('The image field is required'),

     // miniInvest: Yup.string().required('The image field is required'),
     // totalInvest: Yup.string().required('The image field is required'),
     // actionPerCredit: Yup.string().required('The image field is required'),


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
