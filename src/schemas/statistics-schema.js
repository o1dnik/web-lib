import yup from 'yup';

export default yup.object().shape({

  offers_total: yup.number().required().default(0),
  matches_total: yup.number().required().default(0),
  like_count: yup.number().required().default(0),
  dislike_count: yup.number().required().default(0),
  offers_pending: yup.number().required().default(0),
  offers_accepted: yup.number().required().default(0),
  offers_declined: yup.number().required().default(0),
  offers_expired: yup.number().required().default(0),
  matches_pending: yup.number().required().default(0),
  matches_accepted: yup.number().required().default(0),
  matches_declined: yup.number().required().default(0),
  matches_expired: yup.number().required().default(0),
  last_offer_at: yup.string().required().default(''),
  last_match_at: yup.string().required().default(''),
  last_activity: yup.string().required().default('')

}).noUnknown();
