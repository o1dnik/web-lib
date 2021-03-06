import { defineMessages } from "react-intl"

const messages = defineMessages({
  ACT: { id: "app.job.status.active" },
  REV: { id: "app.job.status.review" },
  PAU: { id: "app.job.status.paused" },
  DEL: { id: "app.job.status.deleted" },
  education: { id: "app.matches.reasons.education" },
  experience: { id: "app.matches.reasons.experience" },
  skills: { id: "app.matches.reasons.skills" },
  languages: { id: "app.matches.reasons.languages" },
  location: { id: "app.matches.reasons.location" },
  other: { id: "app.matches.reasons.other" },
  notResponding: { id: "app.matches.reasons.not.responding" },
  qualification: { id: "app.matches.reasons.qualification" },
  cultural: { id: "app.matches.reasons.cultural" },
  salary: { id: "app.matches.reasons.salary" },
  englishLang: { id: "app.common.english" },
  germanLang: { id: "app.common.german" },

  jobTypeFullTime: { id: "app.common.job.type.fulltime" },
  jobTypePartTime: { id: "app.common.job.type.parttime" },
  jobTypeContract: { id: "app.common.job.type.contract" },
  jobTypeIntership: { id: "app.common.job.type.intership" },
  jobTypeTemporary: { id: "app.common.job.type.temporary" },

  jobExperienceLevelFirst: { id: "app.common.job.experience.level.first" },
  jobExperienceLevelSecond: { id: "app.common.job.experience.level.second" },
  jobExperienceLevelThird: { id: "app.common.job.experience.level.third" },
  jobExperienceLevelFourth: { id: "app.common.job.experience.level.fourth" },

  yes: { id: "app.common.yes" },
  no: { id: "app.common.no" },

  langLevelBeginner: { id: "app.common.language.level.beginner" },
  langLevelElementary: { id: "app.common.language.level.elementary" },
  langLevelIntermediate: { id: "app.common.language.level.intermediate" },
  langLevelUpperIntermediate: {
    id: "app.common.language.level.upperintermediate",
  },
  langLevelAdvanced: { id: "app.common.language.level.advanced" },
  langLevelMastery: { id: "app.common.language.level.mastery" },
  langLevelNative: { id: "app.common.language.level.native" },

  careerLevelStudent: { id: "app.common.career.level.student" },
  careerLevelEntry: { id: "app.common.career.level.entry" },
  careerLevelIntermediate: { id: "app.common.career.level.intermediate" },
  careerLevelSenior: { id: "app.common.career.level.senior" },
  careerLevelExpert: { id: "app.common.career.level.expert" },
  careerLevelExecutive: { id: "app.common.career.level.executive" },
})

// Static values
export const JOB_TYPES = [
  { id: "1", name: messages.jobTypeFullTime },
  { id: "2", name: messages.jobTypePartTime },
  { id: "3", name: messages.jobTypeContract },
  { id: "4", name: messages.jobTypeIntership },
  { id: "5", name: messages.jobTypeTemporary },
]

export const JOB_LEVELS = [
  { id: "0", name: messages.jobExperienceLevelFirst },
  { id: "1", name: messages.jobExperienceLevelSecond },
  { id: "2", name: messages.jobExperienceLevelThird },
  { id: "3", name: messages.jobExperienceLevelFourth },
]

export const RELOCATE_OPTIONS = [
  { value: "0", label: messages.yes },
  { value: "1", label: messages.no },
]

export const LANG_LEVELS = [
  { id: "0", name: messages.langLevelBeginner },
  { id: "1", name: messages.langLevelElementary },
  { id: "2", name: messages.langLevelIntermediate },
  { id: "3", name: messages.langLevelUpperIntermediate },
  { id: "4", name: messages.langLevelAdvanced },
  { id: "5", name: messages.langLevelMastery },
  { id: "6", name: messages.langLevelNative },
]

export const DEFAULT_LANGS = [
  { id: "40", name: "English" },
  { id: "51", name: "German" },
  { id: "148", name: "Spanish" },
  { id: "47", name: "French" },
  { id: "128", name: "Portuguese" },
  { id: "70", name: "Italian" },
  { id: "133", name: "Russian" },
  { id: "7", name: "Arabic" },
  { id: "72", name: "Japanese" },
  { id: "59", name: "Hindi" },
  { id: "30", name: "Chinese" },
]

export const TEMPLATE_LANGS = [
  { id: "EN", name: messages.englishLang },
  { id: "DE", name: messages.germanLang },
]

export const CAREER_LEVELS = [
  { id: "0", name: messages.careerLevelStudent },
  { id: "1", name: messages.careerLevelEntry },
  { id: "2", name: messages.careerLevelIntermediate },
  { id: "3", name: messages.careerLevelSenior },
  { id: "4", name: messages.careerLevelExpert },
  { id: "5", name: messages.careerLevelExecutive },
]

export const CONFIRMATION_REASONS = [
  // Leadership & References were commented-out intentionally
  // The order of ids should not change according to backend API
  { id: "1", name: messages.education },
  { id: "2", name: messages.experience },
  { id: "3", name: messages.skills },
  // {id: '4', name: 'Leadership'},
  { id: "5", name: messages.languages },
  { id: "6", name: messages.location },
  // {id: '7', name: 'References'},
  { id: "0", name: messages.other },
]

export const REJECTION_REASONS = [
  { id: "1", name: messages.notResponding },
  { id: "2", name: messages.qualification },
  { id: "3", name: messages.cultural },
  { id: "4", name: messages.salary },
  { id: "0", name: messages.other },
]

// JOB STATUSES:
export const STATUSES_TEXT_MAP = {
  ACT: messages.ACT,
  REV: messages.REV,
  PAU: messages.PAU,
  DEL: messages.DEL,
}

export const STATUSES_COLOR_MAP = {
  ACT: "primary",
  REV: "danger",
  PAU: "default",
  DEL: "default",
}

export const STATUSES_ICONS_MAP = {
  ACT: "ion-checkmark",
  REV: "ion-ios-clock",
  PAU: "ion-pause",
  DEL: "ion-close-circled",
}
