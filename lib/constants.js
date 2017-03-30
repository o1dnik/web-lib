'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MATCH_STATUSES;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Async Actions
var START = exports.START = '_START';
var SUCCESS = exports.SUCCESS = '_SUCCESS';
var FAIL = exports.FAIL = '_FAIL';
var LOADING = exports.LOADING = '_LOADING';
var STOP = exports.STOP = '_STOP';
var NONE = exports.NONE = '_NONE';

var DEFAULT_ERROR = exports.DEFAULT_ERROR = 'Sorry, an error has occurred. We will take care of it. Please try later.';
var DEFAULT_SUCCESS = exports.DEFAULT_SUCCESS = 'Action performed successfully.';
var DEFAULT_START = exports.DEFAULT_START = 'Action started successfully.';

// Server Action
var GET = exports.GET = '_GET';
var CREATE = exports.CREATE = '_CREATE';
var UPDATE = exports.UPDATE = '_UPDATE';
var DELETE = exports.DELETE = '_DELETE';
var RELOAD = exports.RELOAD = '_RELOAD';
var BACKGROUND = exports.BACKGROUND = '_BACKGROUND';

// Resources Actions
var ME = exports.ME = 'ME';
var EMAIL = exports.EMAIL = 'EMAIL';
var PASSWORD = exports.PASSWORD = 'PASSWORD';

var LOGO = exports.LOGO = '_LOGO';

var COMPANY = exports.COMPANY = 'COMPANY';
var COMPANIES = exports.COMPANIES = 'COMPANIES';
var ACCOUNT = exports.ACCOUNT = 'ACCOUNT';
var PROFILE = exports.PROFILE = 'PROFILE';
var SOCIAL_PLATFORM = exports.SOCIAL_PLATFORM = 'SOCIAL_PLATFORM';
var REFERRAL = exports.REFERRAL = 'REFERRAL';

var JOBS_BY_COMPANY_ID = exports.JOBS_BY_COMPANY_ID = 'JOBS_BY_COMPANY_ID';
var JOBS = exports.JOBS = 'JOBS';
var JOB = exports.JOB = 'JOB';

var CANDIDATE = exports.CANDIDATE = 'CANDIDATE';

var LOCATIONS = exports.LOCATIONS = 'LOCATIONS';
var LANGUAGES = exports.LANGUAGES = 'LANGUAGES';
var MATCHES = exports.MATCHES = 'MATCHES';
var MATCH = exports.MATCH = 'MATCH';
var LIKE = exports.LIKE = 'LIKE';
var ROLES = exports.ROLES = 'ROLES';
var SKILLS = exports.SKILLS = 'SKILLS';
var TYPES = exports.TYPES = 'TYPES';
var CV = exports.CV = 'CV';
var PICTURE = exports.PICTURE = 'PICTURE';
var TRACKING = exports.TRACKING = 'TRACKING';
var WEBREFERENCE = exports.WEBREFERENCE = 'WEBREFERENCE';

var SUGGESTED = exports.SUGGESTED = '_SUGGESTED';
var LANGUAGE = exports.LANGUAGE = '_LANGUAGE';
var ROLE = exports.ROLE = '_ROLE';
var SKILL = exports.SKILL = '_SKILL';
var TYPE = exports.TYPE = '_TYPE';
var DESCRIPTION = exports.DESCRIPTION = '_DESCRIPTION';
var CAREER_LEVEL = exports.CAREER_LEVEL = '_CAREER_LEVEL';
var SALARY = exports.SALARY = '_SALARY';
var CITY = exports.CITY = '_CITY';
var RELOCATION = exports.RELOCATION = '_RELOCATION';
var SIMILAR = exports.SIMILAR = '_SIMILAR';

var RESEND = exports.RESEND = 'RESEND';

// auth Actions
var LOGOUT = exports.LOGOUT = 'LOGOUT';
var LOGIN = exports.LOGIN = 'LOGIN';

var SESSION_EXPIRED = exports.SESSION_EXPIRED = 'SESSION_EXPIRED';

// common Actions
var ALERT = exports.ALERT = 'ALERT';
var NOTIFICATION = exports.NOTIFICATION = 'NOTIFICATION';
var REDIRECT = exports.REDIRECT = 'REDIRECT';
var RESET = exports.RESET = '_RESET';
var SHOW = exports.SHOW = '_SHOW';
var HIDE = exports.HIDE = '_HIDE';
var HIDED = exports.HIDED = '_HIDED';
var WARNING = exports.WARNING = '_WARNING';
var ACCEPT = exports.ACCEPT = '_ACCEPT';
var DECLINE = exports.DECLINE = '_DECLINE';
var REJECT = exports.REJECT = '_REJECT';
var STEP = exports.STEP = '_STEP';
var ACTIVATE = exports.ACTIVATE = '_ACTIVATE';
var DEACTIVATE = exports.DEACTIVATE = '_DEACTIVATE';
var INITIAL = exports.INITIAL = '_INITIAL';
var CONNECT = exports.CONNECT = '_CONNECT';
var DISCONNECT = exports.DISCONNECT = '_DISCONNECT';
var CONFIRM = exports.CONFIRM = '_CONFIRM';

// do not use it for server request, it is for requesting an action
var CHANGE_REQUEST = exports.CHANGE_REQUEST = '_CHANGE_REQUEST';
var DELETE_REQUEST = exports.DELETE_REQUEST = '_DELETE_REQUEST';

// 0 - candidate pending - show accept/reject buttons
// 1 - candidate declined - nothing to show
// 2 - candidate accepted - show pending
// 3 - company declined - show rejected
// 4 - company accepted - show accepted
// 5 - candidated expired - show expired
// 6 - company expired - show expired

var CANDIDATE_PENDING = exports.CANDIDATE_PENDING = 'CANDIDATE_PENDING';
var CANDIDATE_DECLINED = exports.CANDIDATE_DECLINED = 'CANDIDATE_DECLINED';
var CANDIDATE_ACCEPTED = exports.CANDIDATE_ACCEPTED = 'CANDIDATE_ACCEPTED';
var COMPANY_DECLINED = exports.COMPANY_DECLINED = 'COMPANY_DECLINED';
var COMPANY_ACCEPTED = exports.COMPANY_ACCEPTED = 'COMPANY_ACCEPTED';
var CANDIDATE_EXPIRED = exports.CANDIDATE_EXPIRED = 'CANDIDATE_EXPIRED';
var COMPANY_EXPIRED = exports.COMPANY_EXPIRED = 'COMPANY_EXPIRED';

var MATCH_STATUSES = exports.MATCH_STATUSES = (_MATCH_STATUSES = {}, _defineProperty(_MATCH_STATUSES, CANDIDATE_PENDING, '0'), _defineProperty(_MATCH_STATUSES, CANDIDATE_DECLINED, '1'), _defineProperty(_MATCH_STATUSES, CANDIDATE_ACCEPTED, '2'), _defineProperty(_MATCH_STATUSES, COMPANY_DECLINED, '3'), _defineProperty(_MATCH_STATUSES, COMPANY_ACCEPTED, '4'), _defineProperty(_MATCH_STATUSES, CANDIDATE_EXPIRED, '5'), _defineProperty(_MATCH_STATUSES, COMPANY_EXPIRED, '6'), _MATCH_STATUSES);