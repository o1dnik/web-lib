import yup from "yup"
import roleCategory from "./role-category-schema"

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

    category: roleCategory.nullable(true).default(null),
  })
  .noUnknown()
