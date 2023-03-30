import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({

     title: Yup.string().required('You need a tile to create your project')
          .min(4, 'Too Short!')
          .max(25, 'Too Long!')
          .required('Name is required'),
     url: Yup.string().required('The url field is required'), //url a youtube
     description: Yup.string().required('Write a brief description')
          .min(4, 'Too Short!')
          .max(255, 'Too Long!')
          .required('Name is required'),
     duration: Yup.string().required('Write how long you want your project to last')
          .min(4, 'Too Short!')
          .max(255, 'Too Long!')
          .required('Name is required'),
     country: Yup.string().required('Indicate your country'), //echo
     city: Yup.string().required('Indicate your city'), // echo
     history: Yup.string().required('Write how long you want your project to last')
          .min(4, 'Too Short!')
          .max(255, 'Too Long!')
          .required('Name is required'),
     proposal: Yup.string().required('write down your proposal'), //echo
     commerce: Yup.string().required('Tell us the type of trade you want'),
     goal: Yup.number().required('Write your goal'),
     currency: Yup.string().required('Tell us yout required currency'),
     cost: Yup.number().required('let us know what the cost is'),
     MinimumInvestment: Yup.number().required(
          'The Minimum Investment field is required'
     ),
     ActionPerCredits: Yup.string().required(
          'The ActionPerCredits field is required'
     ),
     ReturnOnInvestment: Yup.string().required(
          'The Return On Investment field is reqiired'
     ),
     tags: Yup.array()
          .of(Yup.string())
          .required('The Tags field is required')
});



export const initialValues = {
     url: 'https://meet.google.com/rtt-fqoi-knq',
     title: 'Prueba',
     country: 'Prueba',
     city: 'Prueba',
     history: 'Prueba',
     description: 'Prueba',
     proposal: 'Prueba',
     duration: 'Prueba',
     commerce: 'Prueba',
     tags: ['Prueba'],
     goal: 10,
     currency: 'EUROS',
     cost: 10,
     minimuminvestment: 10,
     actionPerCredit: 'Prueba',
     returnInvestment: 'Prueba',

};