import yup from 'yup'

import citySchema from './city-schema'
import languageSchema from './language-schema'
import roleSchema from './role-schema'
import skillSchema from './skill-schema'
import statisticsSchema from './statistics-schema'

export default yup.object().shape({

  id: yup.string().required(),

  active: yup.bool().required().default(false),
  active_at: yup.string(),

  career_level: yup.string().default(''),

  city: citySchema.nullable(true).default(null),

  is_complete: yup.bool().required().default(false),

  completed_at: yup.string(),

  completion: yup.number().default(0),

  statistics: statisticsSchema.nullable(true).default(null),

  settings: yup.object({
    notify_alerts: yup.bool().required().default(false),
    notify_news: yup.bool().required().default(false)
  }).nullable(false).default({}),

  candidate_cv: yup.object({
    txt: yup.string().url(),
    pdf: yup.string().url(),
    original: yup.string(),
    images: yup.array().of(yup.string().url())
  }).nullable(true).default(null),

  first_name: yup.string().required().default(''),
  last_name: yup.string().required().default(''),

  is_deleted: yup.bool().required().default(false),

  job_types: yup.array().of(yup.number()).required().ensure(),

  languages: yup.array().of(languageSchema).required().ensure(),

  referral: yup.object({
    id: yup.string().required().default(''),
    name: yup.string().required().default(''),
    slug: yup.string().required().default('')
  }).nullable(true).default(null),

  relocate: yup.bool().required().default(false),

  skills: yup.array().of(skillSchema).required().ensure(),

  user: yup.string().required().default(''),

  locations: yup.array().of(citySchema).required().ensure(),

  references: yup.array().of(yup.string()).required().ensure(),

  job_roles: yup.array().of(roleSchema).required().ensure(),

  email: yup.string().email().required().default(''),

  salary_min: yup.number().default(0).required(),

  picture: yup.string().required().default(''),

  tracking: yup.object().nullable(true).default(null)

})
  .noUnknown()
