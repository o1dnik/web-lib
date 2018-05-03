import yup from "yup"

export default yup
  .object()
  .shape({
    id: yup
      .string()
      .required()
      .default(""),

    name: yup
      .string()
      .required()
      .default(""),

    level: yup
      .string()
      .required()
      .default(""),
  })
  .noUnknown()
