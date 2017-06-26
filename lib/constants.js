var _MATCH_STATUSES;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Async Actions
export var START = 'START';
export var SUCCESS = 'SUCCESS';
export var FAIL = 'FAIL';
export var LOADING = 'LOADING';
export var STOP = 'STOP';
export var NONE = 'NONE';

export var DEFAULT_ERROR = 'Sorry, an error has occurred. We will take care of it. Please try later.';
export var NETWORK_ERROR = 'Please check your internet connection and try again.';
export var DEFAULT_SUCCESS = 'Action performed successfully.';
export var DEFAULT_START = 'Action started successfully.';

// Server Action
export var GET = 'GET';
export var CREATE = 'CREATE';
export var UPDATE = 'UPDATE';
export var DELETE = 'DELETE';
export var RELOAD = 'RELOAD';
export var BACKGROUND = 'BACKGROUND';
export var PENDING = 'PENDING';
export var FORBIDDEN = 'FORBIDDEN';

// Resources Actions
export var ME = 'ME';
export var EMAIL = 'EMAIL';
export var PASSWORD = 'PASSWORD';
export var SETTINGS = 'SETTINGS';

export var LOGO = 'LOGO';
export var BILLING = 'BILLING';

export var COMPANY = 'COMPANY';
export var COMPANIES = 'COMPANIES';
export var ACCOUNT = 'ACCOUNT';
export var PROFILE = 'PROFILE';
export var SOCIAL_PLATFORM = 'SOCIAL_PLATFORM';
export var REFERRAL = 'REFERRAL';

export var JOBS_BY_COMPANY_ID = 'JOBS_BY_COMPANY_ID';
export var JOBS = 'JOBS';
export var JOB = 'JOB';

export var CANDIDATES_ACCEPTED = 'CANDIDATES_ACCEPTED';
export var MATCHES_ACCEPTED = 'MATCHES_ACCEPTED';
export var CANDIDATES_REFERRED = 'CANDIDATES_REFERRED';
export var CANDIDATE = 'CANDIDATE';

export var LOCATIONS = 'LOCATIONS';
export var LANGUAGES = 'LANGUAGES';
export var MATCHES = 'MATCHES';
export var MATCH = 'MATCH';
export var LIKE = 'LIKE';
export var DISLIKE = 'DISLIKE';
export var ROLES = 'ROLES';
export var SKILLS = 'SKILLS';
export var TYPES = 'TYPES';
export var CV = 'CV';
export var PICTURE = 'PICTURE';
export var TRACKING = 'TRACKING';
export var WEBREFERENCE = 'WEBREFERENCE';
export var THREAD = 'THREAD';
export var THREADS = 'THREADS';
export var MESSAGE = 'MESSAGE';
export var MESSAGES = 'MESSAGES';
export var TUPLE = 'TUPLE';

export var SUGGESTED = 'SUGGESTED';
export var LANGUAGE = 'LANGUAGE';
export var ROLE = 'ROLE';
export var SKILL = 'SKILL';
export var TYPE = 'TYPE';
export var DESCRIPTION = 'DESCRIPTION';
export var CAREER_LEVEL = 'CAREER_LEVEL';
export var SALARY = 'SALARY';
export var CITY = 'CITY';
export var RELOCATION = 'RELOCATION';
export var SIMILAR = 'SIMILAR';

export var INQUIRY = 'INQUIRY';

export var RESEND = 'RESEND';
export var SET = 'SET';
export var APPLICATION = 'APPLICATION';
export var FLAG = 'FLAG';
export var FILTER = 'FILTER';

// auth Actions
export var LOGOUT = 'LOGOUT';
export var LOGIN = 'LOGIN';

export var SESSION_EXPIRED = 'SESSION_EXPIRED';

// common Actions
export var ALERT = 'ALERT';
export var NOTIFICATION = 'NOTIFICATION';
export var REDIRECT = 'REDIRECT';
export var RESET = 'RESET';
export var SHOW = 'SHOW';
export var HIDE = 'HIDE';
export var HIDED = 'HIDED';
export var WARNING = 'WARNING';
export var ACCEPT = 'ACCEPT';
export var DECLINE = 'DECLINE';
export var REJECT = 'REJECT';
export var APPROVE = 'APPROVE';
export var STEP = 'STEP';
export var CONFIRMATION = 'CONFIRMATION';
export var PREVIEW = 'PREVIEW';
export var FEEDBACK = 'FEEDBACK';
export var SUBSCRIPTION = 'SUBSCRIPTION';
export var ORDER = 'ORDER';
export var ACTIVATE = 'ACTIVATE';
export var DEACTIVATE = 'DEACTIVATE';
export var INITIAL = 'INITIAL';
export var CONNECT = 'CONNECT';
export var DISCONNECT = 'DISCONNECT';
export var CONFIRM = 'CONFIRM';
export var COUNT = 'COUNT';

// do not use it for server request, it is for requesting an action
export var CHANGE_REQUEST = 'CHANGE_REQUEST';
export var DELETE_REQUEST = 'DELETE_REQUEST';

// 0 - candidate pending - show accept/reject buttons
// 1 - candidate declined - nothing to show
// 2 - candidate accepted - show pending
// 3 - company declined - show rejected
// 4 - company accepted - show accepted
// 5 - candidated expired - show expired
// 6 - company expired - show expired

export var CANDIDATE_PENDING = 'CANDIDATE_PENDING';
export var CANDIDATE_DECLINED = 'CANDIDATE_DECLINED';
export var CANDIDATE_ACCEPTED = 'CANDIDATE_ACCEPTED';
export var COMPANY_DECLINED = 'COMPANY_DECLINED';
export var COMPANY_ACCEPTED = 'COMPANY_ACCEPTED';
export var CANDIDATE_EXPIRED = 'CANDIDATE_EXPIRED';
export var COMPANY_EXPIRED = 'COMPANY_EXPIRED';
export var COMPANY_REJECTED = 'COMPANY_REJECTED';
export var COMPANY_APPROVED = 'COMPANY_APPROVED';

export var MATCH_STATUSES = (_MATCH_STATUSES = {}, _defineProperty(_MATCH_STATUSES, CANDIDATE_PENDING, '0'), _defineProperty(_MATCH_STATUSES, CANDIDATE_DECLINED, '1'), _defineProperty(_MATCH_STATUSES, CANDIDATE_ACCEPTED, '2'), _defineProperty(_MATCH_STATUSES, COMPANY_DECLINED, '3'), _defineProperty(_MATCH_STATUSES, COMPANY_ACCEPTED, '4'), _defineProperty(_MATCH_STATUSES, CANDIDATE_EXPIRED, '5'), _defineProperty(_MATCH_STATUSES, COMPANY_EXPIRED, '6'), _defineProperty(_MATCH_STATUSES, COMPANY_REJECTED, '7'), _defineProperty(_MATCH_STATUSES, COMPANY_APPROVED, '8'), _MATCH_STATUSES);

// Image uploader / cropper
export var IMG_UPLOAD_LIMIT = 1000000; // ~1mb limit
export var IMG_ACCEPTED_TYPES = 'image/*';