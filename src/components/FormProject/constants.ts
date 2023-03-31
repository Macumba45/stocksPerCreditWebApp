import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
     title: Yup.string()
          .required('You need a tile to create your project')
          .min(4, 'Too Short!')
          .max(255, 'Too Long!')
          .required('Title is required'),
     url: Yup.string().required('URL is required'), //url a youtube
     description: Yup.string()
          .required('Write a brief description')
          .min(4, 'Too Short!')
          .max(255, 'Too Long!')
          .required('Description is required'),
     duration: Yup.string()
          .required('Write how long you want your project to last')
          .min(4, 'Too Short!')
          .max(255, 'Too Long!')
          .required('Name is required'),
     country: Yup.string().required('Indicate your country'), //echo
     city: Yup.string().required('Indicate your city'), // echo
     history: Yup.string()
          .required('Write how long you want your project to last')
          .min(4, 'Too Short!')
          .max(100000, 'Too Long!')
          .required('Name is required'),
     proposal: Yup.string().required('write down your proposal'), //echo
     commerce: Yup.string().required('Tell us the type of trade you want'),
     goal: Yup.number().required('Write your goal'),
     currency: Yup.string().required('Tell us yout required currency'),
     cost: Yup.number().required('let us know what the cost is'),
     minimuminvestment: Yup.number().required(
          'The Minimum Investment field is required'
     ),
     actionPerCredit: Yup.string().required(
          'The ActionPerCredits field is required'
     ),
     ReturnOnInvestment: Yup.string().required(
          'The Return On Investment field is reqiired'
     ),
     tags: Yup.array().of(Yup.string()).required('The Tags field is required'),
});

export const initialValues = {
     url: 'https://player.vimeo.com/video/800507584',
     title: 'Plantación de árboles para combatir el cambio climático',
     country: 'España',
     city: 'Madrid',
     history: 'El cambio climático es uno de los mayores desafíos que enfrenta el planeta. La deforestación es una de las principales causas del calentamiento global, ya que los árboles absorben dióxido de carbono y otros gases de efecto invernadero de la atmósfera. Este proyecto tiene como objetivo plantar árboles para reducir la huella de carbono y combatir el cambio climático.',
     description: 'Proyecto para plantar árboles y reducir la huella de carbono',
     proposal: 'Este proyecto tiene como objetivo plantar árboles para combatir el cambio climático y reducir la huella de carbono.',
     duration: new Date('10 01 2024'),
     commerce: 'Se invita a los voluntarios a participar en la plantación de árboles en áreas designadas. Los donantes pueden contribuir con fondos para la compra de árboles y otros materiales necesarios para el proyecto',
     tags: [],
     goal: 40000,
     currency: 'EUROS',
     cost: 50000,
     minimuminvestment: 10,
     actionPerCredit: '1,5',
     ReturnOnInvestment: '10 01 2025',
};
