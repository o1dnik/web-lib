import yup from 'yup';

export default yup.object().shape({

  id: yup.string().required().default(''),

  url: yup.string().required().default('')

}).noUnknown();