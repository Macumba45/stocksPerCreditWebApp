import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
     url: Yup.string().required('The url field is required'), //url a youtube
     tile: Yup.string().required('You need a tile to create your project'), //title 
     country: Yup.string().required('Indicate your country'), //echo
     city: Yup.string().required('Indicate your city'), // echo

     history: Yup.string().required('Explain your start with a brief history'), //echo
     description: Yup.string().required('Write a brief description'), //breve description //echo
     proposal: Yup.string().required('write down your proposal'),//echo
     duration: Yup.string().required('Write how long you want your project to last'), //echo
     commerce: Yup.string().required('Tell us the type of trade you want'),
     tags: Yup.string().required('The Tasg field is required'), //echo pero en commerce ( cambiar )

     goal: Yup.string().required('Write your goal'), 
     currency: Yup.string().required('Tell us yout required currency'),
     cost: Yup.string().required('let us know what the cost is'),
     MinimumInvestment: Yup.string().required('The Minimum Investment field is required'),
     ActionPerCredits: Yup.string().required('The ActionPerCredits field is required'),
     ReturnOnInvestment: Yup.string().required('The Return On Investment field is reqiired'),


});

export const initialValues = {
     image: '',
     tile: '',
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
