// Async Actions
export const START = 'START'
export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'
export const LOADING = 'LOADING'
export const STOP = 'STOP'
export const NONE = 'NONE'

export const DEFAULT_ERROR = 'Sorry, an error has occurred. We will take care of it. Please try later.'
export const NETWORK_ERROR = 'Please check your internet connection and try again.'
export const DEFAULT_SUCCESS = 'Action performed successfully.'
export const DEFAULT_START = 'Action started successfully.'

// Server Action
export const GET = 'GET'
export const CREATE = 'CREATE'
export const UPDATE = 'UPDATE'
export const PATCH = 'PATCH'
export const DELETE = 'DELETE'
export const RELOAD = 'RELOAD'
export const BACKGROUND = 'BACKGROUND'
export const PENDING = 'PENDING'
export const FORBIDDEN = 'FORBIDDEN'

// Resources Actions
export const ME = 'ME'
export const EMAIL = 'EMAIL'
export const PASSWORD = 'PASSWORD'
export const SETTINGS = 'SETTINGS'

export const LOGO = 'LOGO'
export const BILLING = 'BILLING'

export const COMPANY = 'COMPANY'
export const COMPANIES = 'COMPANIES'
export const ACCOUNT = 'ACCOUNT'
export const PROFILE = 'PROFILE'
export const SOCIAL_PLATFORM = 'SOCIAL_PLATFORM'
export const REFERRAL = 'REFERRAL'
export const BOT = 'BOT'
export const CONNECTION = 'CONNECTION'
export const CODE = 'CODE'

export const JOBS_BY_COMPANY_ID = 'JOBS_BY_COMPANY_ID'
export const JOBS = 'JOBS'
export const JOB = 'JOB'

export const REFRESH = 'REFRESH'
export const TOKEN = 'TOKEN'

export const CANDIDATES_ACCEPTED = 'CANDIDATES_ACCEPTED'
export const MATCHES_ACCEPTED = 'MATCHES_ACCEPTED'
export const CANDIDATES_REFERRED = 'CANDIDATES_REFERRED'
export const CANDIDATE = 'CANDIDATE'

export const LOCATIONS = 'LOCATIONS'
export const LANGUAGES = 'LANGUAGES'
export const MATCHES = 'MATCHES'
export const MATCH = 'MATCH'
export const LIKE = 'LIKE'
export const DISLIKE = 'DISLIKE'
export const ROLES = 'ROLES'
export const SKILLS = 'SKILLS'
export const TYPES = 'TYPES'
export const CV = 'CV'
export const PICTURE = 'PICTURE'
export const TRACKING = 'TRACKING'
export const WEBREFERENCE = 'WEBREFERENCE'
export const THREAD = 'THREAD'
export const THREADS = 'THREADS'
export const MESSAGE = 'MESSAGE'
export const MESSAGES = 'MESSAGES'
export const TUPLE = 'TUPLE'

export const SUGGESTED = 'SUGGESTED'
export const LANGUAGE = 'LANGUAGE'
export const ROLE = 'ROLE'
export const SKILL = 'SKILL'
export const TYPE = 'TYPE'
export const DESCRIPTION = 'DESCRIPTION'
export const CAREER_LEVEL = 'CAREER_LEVEL'
export const SALARY = 'SALARY'
export const CITY = 'CITY'
export const RELOCATION = 'RELOCATION'
export const LOCATION = 'LOCATION'
export const SIMILAR = 'SIMILAR'

export const INQUIRY = 'INQUIRY'

export const RESEND = 'RESEND'
export const SET = 'SET'
export const APPLICATION = 'APPLICATION'
export const FLAG = 'FLAG'
export const FILTER = 'FILTER'

// auth Actions
export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'

export const SESSION_EXPIRED = 'SESSION_EXPIRED'

// common Actions
export const ALERT = 'ALERT'
export const NOTIFICATION = 'NOTIFICATION'
export const REDIRECT = 'REDIRECT'
export const RESET = 'RESET'
export const SHOW = 'SHOW'
export const HIDE = 'HIDE'
export const HIDED = 'HIDED'
export const WARNING = 'WARNING'
export const ACCEPT = 'ACCEPT'
export const DECLINE = 'DECLINE'
export const REJECT = 'REJECT'
export const APPROVE = 'APPROVE'
export const STEP = 'STEP'
export const CONFIRMATION = 'CONFIRMATION'
export const PREVIEW = 'PREVIEW'
export const CURRENT = 'CURRENT'
export const QUEUE = 'QUEUE'
export const ACCEPTED = 'ACCEPTED'
export const FEEDBACK = 'FEEDBACK'
export const SUBSCRIPTION = 'SUBSCRIPTION'
export const ORDER = 'ORDER'
export const ACTIVATE = 'ACTIVATE'
export const DEACTIVATE = 'DEACTIVATE'
export const INITIAL = 'INITIAL'
export const CONNECT = 'CONNECT'
export const DISCONNECT = 'DISCONNECT'
export const CONFIRM = 'CONFIRM'
export const COUNT = 'COUNT'

// do not use it for server request, it is for requesting an action
export const CHANGE_REQUEST = 'CHANGE_REQUEST'
export const DELETE_REQUEST = 'DELETE_REQUEST'

// 0 - candidate pending - show accept/reject buttons
// 1 - candidate declined - nothing to show
// 2 - candidate accepted - show pending
// 3 - company declined - show rejected
// 4 - company accepted - show accepted
// 5 - candidated expired - show expired
// 6 - company expired - show expired

export const CANDIDATE_PENDING = 'CANDIDATE_PENDING'
export const CANDIDATE_DECLINED = 'CANDIDATE_DECLINED'
export const CANDIDATE_ACCEPTED = 'CANDIDATE_ACCEPTED'
export const COMPANY_DECLINED = 'COMPANY_DECLINED'
export const COMPANY_ACCEPTED = 'COMPANY_ACCEPTED'
export const CANDIDATE_EXPIRED = 'CANDIDATE_EXPIRED'
export const COMPANY_EXPIRED = 'COMPANY_EXPIRED'
export const COMPANY_REJECTED = 'COMPANY_REJECTED'
export const COMPANY_APPROVED = 'COMPANY_APPROVED'

export const MATCH_STATUSES = {
  [CANDIDATE_PENDING]: '0',
  [CANDIDATE_DECLINED]: '1',
  [CANDIDATE_ACCEPTED]: '2',
  [COMPANY_DECLINED]: '3',
  [COMPANY_ACCEPTED]: '4',
  [CANDIDATE_EXPIRED]: '5',
  [COMPANY_EXPIRED]: '6',
  [COMPANY_REJECTED]: '7',
  [COMPANY_APPROVED]: '8'
}

// Image uploader / cropper
export const IMG_UPLOAD_LIMIT = 1000000 // ~1mb limit
export const IMG_ACCEPTED_TYPES = 'image/*'
