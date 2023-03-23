import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  image: Yup.string()
  .required('The image field is required'),
  title: Yup.string()
    .required('The name field is required'),
  description: Yup.string()
  .required('The status field is required'),
  country: Yup.string()
  .required('The species field is required'),
  city: Yup.string()
  .required('The species field is required'),
  categories: Yup.string()
  .required('The species field is required'),
  collected: Yup.string()
  .required('The species field is required'),
  investors: Yup.string()
  .required('The species field is required'),
  minimuminvestment: Yup.string()
  .required('The species field is required'),
  goals: Yup.string()
  .required('The species field is required'),
  limitvalue: Yup.string()
  .required('The species field is required'),

})

export const initialValues = {
  image: '',
  title: '',
  description: '',
  country: '',
  city: '',
  categories: '',
  collected:'',
  investors:'',
  minimuminvestment:'',
  goals:'',
  limitvalue:''
}

                         