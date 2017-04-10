// Async Actions
export const START = '_START';
export const SUCCESS = '_SUCCESS';
export const FAIL = '_FAIL';
export const LOADING = '_LOADING';
export const STOP = '_STOP';
export const NONE = '_NONE';

export const DEFAULT_ERROR = 'Sorry, an error has occurred. We will take care of it. Please try later.';
export const DEFAULT_SUCCESS = 'Action performed successfully.';
export const DEFAULT_START = 'Action started successfully.';

// Server Action
export const GET = '_GET';
export const CREATE = '_CREATE';
export const UPDATE = '_UPDATE';
export const DELETE = '_DELETE';
export const RELOAD = '_RELOAD';
export const BACKGROUND = '_BACKGROUND';
export const PENDING = '_PENDING';

// Resources Actions
export const ME = 'ME';
export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';
export const SETTINGS = 'SETTINGS';

export const LOGO = '_LOGO';
export const BILLING = '_BILLING';

export const COMPANY = 'COMPANY';
export const COMPANIES = 'COMPANIES';
export const ACCOUNT = 'ACCOUNT';
export const PROFILE = 'PROFILE';
export const SOCIAL_PLATFORM = 'SOCIAL_PLATFORM';
export const REFERRAL = 'REFERRAL';

export const JOBS_BY_COMPANY_ID = 'JOBS_BY_COMPANY_ID';
export const JOBS = 'JOBS';
export const JOB = 'JOB';

export const CANDIDATES_ACCEPTED = 'CANDIDATES_ACCEPTED';
export const CANDIDATES_REFERRED = 'CANDIDATES_REFERRED';
export const CANDIDATE = 'CANDIDATE';

export const LOCATIONS = 'LOCATIONS';
export const LANGUAGES = 'LANGUAGES';
export const MATCHES = 'MATCHES';
export const MATCH = 'MATCH';
export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const ROLES = 'ROLES';
export const SKILLS = 'SKILLS';
export const TYPES = 'TYPES';
export const CV = 'CV';
export const PICTURE = 'PICTURE';
export const TRACKING = 'TRACKING';
export const WEBREFERENCE = 'WEBREFERENCE';

export const SUGGESTED = '_SUGGESTED';
export const LANGUAGE = '_LANGUAGE';
export const ROLE = '_ROLE';
export const SKILL = '_SKILL';
export const TYPE = '_TYPE';
export const DESCRIPTION = '_DESCRIPTION';
export const CAREER_LEVEL = '_CAREER_LEVEL';
export const SALARY = '_SALARY';
export const CITY = '_CITY';
export const RELOCATION = '_RELOCATION';
export const SIMILAR = '_SIMILAR';

export const INQUIRY = 'INQUIRY';

export const RESEND = 'RESEND';

// auth Actions
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

export const SESSION_EXPIRED = 'SESSION_EXPIRED';

// common Actions
export const ALERT = 'ALERT';
export const NOTIFICATION = 'NOTIFICATION';
export const REDIRECT = 'REDIRECT';
export const RESET = '_RESET';
export const SHOW = '_SHOW';
export const HIDE = '_HIDE';
export const HIDED = '_HIDED';
export const WARNING = '_WARNING';
export const ACCEPT = '_ACCEPT';
export const DECLINE = '_DECLINE';
export const REJECT = '_REJECT';
export const STEP = '_STEP';
export const CONFIRMATION = '_CONFIRMATION';
export const PREVIEW = '_PREVIEW';
export const FEEDBACK = '_FEEDBACK';
export const SUBSCRIPTION = '_SUBSCRIPTION';
export const ORDER = '_ORDER';
export const ACTIVATE = '_ACTIVATE';
export const DEACTIVATE = '_DEACTIVATE';
export const INITIAL = '_INITIAL';
export const CONNECT = '_CONNECT';
export const DISCONNECT = '_DISCONNECT';
export const CONFIRM = '_CONFIRM';

// do not use it for server request, it is for requesting an action
export const CHANGE_REQUEST = '_CHANGE_REQUEST';
export const DELETE_REQUEST = '_DELETE_REQUEST';

// 0 - candidate pending - show accept/reject buttons
// 1 - candidate declined - nothing to show
// 2 - candidate accepted - show pending
// 3 - company declined - show rejected
// 4 - company accepted - show accepted
// 5 - candidated expired - show expired
// 6 - company expired - show expired

export const CANDIDATE_PENDING = 'CANDIDATE_PENDING';
export const CANDIDATE_DECLINED = 'CANDIDATE_DECLINED';
export const CANDIDATE_ACCEPTED = 'CANDIDATE_ACCEPTED';
export const COMPANY_DECLINED = 'COMPANY_DECLINED';
export const COMPANY_ACCEPTED = 'COMPANY_ACCEPTED';
export const CANDIDATE_EXPIRED = 'CANDIDATE_EXPIRED';
export const COMPANY_EXPIRED = 'COMPANY_EXPIRED';

export const MATCH_STATUSES = {
  [CANDIDATE_PENDING]: '0',
  [CANDIDATE_DECLINED]: '1',
  [CANDIDATE_ACCEPTED]: '2',
  [COMPANY_DECLINED]: '3',
  [COMPANY_ACCEPTED]: '4',
  [CANDIDATE_EXPIRED]: '5',
  [COMPANY_EXPIRED]: '6'
};
