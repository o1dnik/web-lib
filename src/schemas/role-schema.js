import yup from 'yup'

export default yup.object().shape({

  id: yup.string().required().default(''),

  name: yup.string().required().default(''),

  level: yup.string().required().default(''),

  category_id: yup.string().default(''),

  category_name: yup.string().default('')

}).noUnknown()
