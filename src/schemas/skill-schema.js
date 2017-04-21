import yup from 'yup'

export default yup.object().shape({

  id: yup.string().required().default(''),

  name: yup.string().required().default(''),

  slug: yup.string().default('')

}).noUnknown()
