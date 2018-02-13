import yup from "yup"
import countrySchema from "./country-schema"

export default yup
  .object()
  .shape({
    id: yup
      .string()
      .required()
      .default(""),

    place_id: yup
      .string()
      .required()
      .default(""),

    formatted_address: yup
      .string()
      .required()
      .default(""),

    name: yup
      .string()
      .required()
      .default(""),

    country: countrySchema.nullable(true).default(null)
  })
  .noUnknown()
