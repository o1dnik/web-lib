import yup from 'yup';

import citySchema from './city-schema';
import countrySchema from './country-schema';
import jobTypesSchema from './job-types-schema';
import languageSchema from './language-schema';
import roleSchema from './role-schema';
import skillSchema from './skill-schema';

export default yup.object().shape({

  id: yup.string().required(),

  title: yup.string().default(''),

  city: citySchema.nullable(true).default(null),

  country: countrySchema.nullable(true).default(null),

  skills: yup.array().of(skillSchema).required().ensure(),

  company: yup.object({
    id: yup.string().required().default(''),
    name: yup.string().required().default(''),
    logo: yup.string().required().default(''),
    website: yup.string().required().default(''),
    about: yup.string().required().default('')
  }).nullable(true).default(null),

  languages: yup.array().of(languageSchema).required().ensure(),

  job_types: yup.array().of(jobTypesSchema).required().ensure(),

  roles: yup.array().of(roleSchema).required().ensure(),

  status: yup.string().required().default(''),

  salary: yup.object({
    min: yup.number().required().default(10000),
    max: yup.number().required().default(100000)
  }).required(),

  created_at: yup.string().required().default(''),
  changed_at: yup.string().required().default(''),

  relocate: yup.bool().required().default(false),

  statistics: yup.object({}).nullable(true).default(null),

  match: yup.object({
    id: yup.string().required(),
    status: yup.string().required().default(''),
    expired_at: yup.string().required().default('')
  }).required().nullable(true).default(null),

  liked: yup.bool().required().default(false)

});
