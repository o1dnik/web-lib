"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MATCH_STATUSES;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Async Actions
var START = exports.START = "START";
var SUCCESS = exports.SUCCESS = "SUCCESS";
var FAIL = exports.FAIL = "FAIL";
var LOADING = exports.LOADING = "LOADING";
var STOP = exports.STOP = "STOP";
var NONE = exports.NONE = "NONE";

// Server Action
var GET = exports.GET = "GET";
var CREATE = exports.CREATE = "CREATE";
var UPDATE = exports.UPDATE = "UPDATE";
var PATCH = exports.PATCH = "PATCH";
var DELETE = exports.DELETE = "DELETE";
var RELOAD = exports.RELOAD = "RELOAD";
var BACKGROUND = exports.BACKGROUND = "BACKGROUND";
var PENDING = exports.PENDING = "PENDING";
var FORBIDDEN = exports.FORBIDDEN = "FORBIDDEN";

// Resources Actions
var ME = exports.ME = "ME";
var EMAIL = exports.EMAIL = "EMAIL";
var PASSWORD = exports.PASSWORD = "PASSWORD";
var SETTINGS = exports.SETTINGS = "SETTINGS";

var LOGO = exports.LOGO = "LOGO";
var BILLING = exports.BILLING = "BILLING";

var COMPANY = exports.COMPANY = "COMPANY";
var COMPANIES = exports.COMPANIES = "COMPANIES";
var ACCOUNT = exports.ACCOUNT = "ACCOUNT";
var PROFILE = exports.PROFILE = "PROFILE";
var SOCIAL_PLATFORM = exports.SOCIAL_PLATFORM = "SOCIAL_PLATFORM";
var REFERRAL = exports.REFERRAL = "REFERRAL";
var BOT = exports.BOT = "BOT";
var CONNECTION = exports.CONNECTION = "CONNECTION";
var CODE = exports.CODE = "CODE";

var JOBS_BY_COMPANY_ID = exports.JOBS_BY_COMPANY_ID = "JOBS_BY_COMPANY_ID";
var JOB_TITLES_BY_COMPANY_ID = exports.JOB_TITLES_BY_COMPANY_ID = "JOB_TITLES_BY_COMPANY_ID";
var JOBS = exports.JOBS = "JOBS";
var JOB = exports.JOB = "JOB";

var REFRESH = exports.REFRESH = "REFRESH";
var TOKEN = exports.TOKEN = "TOKEN";
var G8T = exports.G8T = "G8T";

var CANDIDATES_ACCEPTED = exports.CANDIDATES_ACCEPTED = "CANDIDATES_ACCEPTED";
var MATCHES_ACCEPTED = exports.MATCHES_ACCEPTED = "MATCHES_ACCEPTED";
var CANDIDATES_REFERRED = exports.CANDIDATES_REFERRED = "CANDIDATES_REFERRED";
var CANDIDATE = exports.CANDIDATE = "CANDIDATE";

var LOCATIONS = exports.LOCATIONS = "LOCATIONS";
var RECRUTIER = exports.RECRUTIER = "RECRUTIER";
var LANGUAGES = exports.LANGUAGES = "LANGUAGES";
var LOCALE = exports.LOCALE = "LOCALE";
var MATCHES = exports.MATCHES = "MATCHES";
var MATCH = exports.MATCH = "MATCH";
var LIKE = exports.LIKE = "LIKE";
var DISLIKE = exports.DISLIKE = "DISLIKE";
var ROLES = exports.ROLES = "ROLES";
var SKILLS = exports.SKILLS = "SKILLS";
var TYPES = exports.TYPES = "TYPES";
var CV = exports.CV = "CV";
var PICTURE = exports.PICTURE = "PICTURE";
var TRACKING = exports.TRACKING = "TRACKING";
var WEBREFERENCE = exports.WEBREFERENCE = "WEBREFERENCE";
var THREAD = exports.THREAD = "THREAD";
var THREADS = exports.THREADS = "THREADS";
var MESSAGE = exports.MESSAGE = "MESSAGE";
var MESSAGES = exports.MESSAGES = "MESSAGES";
var TUPLE = exports.TUPLE = "TUPLE";

var SUGGESTED = exports.SUGGESTED = "SUGGESTED";
var LANGUAGE = exports.LANGUAGE = "LANGUAGE";
var ROLE = exports.ROLE = "ROLE";
var SKILL = exports.SKILL = "SKILL";
var TYPE = exports.TYPE = "TYPE";
var DESCRIPTION = exports.DESCRIPTION = "DESCRIPTION";
var CAREER_LEVEL = exports.CAREER_LEVEL = "CAREER_LEVEL";
var SALARY = exports.SALARY = "SALARY";
var CITY = exports.CITY = "CITY";
var RELOCATION = exports.RELOCATION = "RELOCATION";
var LOCATION = exports.LOCATION = "LOCATION";
var SIMILAR = exports.SIMILAR = "SIMILAR";

var INQUIRY = exports.INQUIRY = "INQUIRY";

var RESEND = exports.RESEND = "RESEND";
var SET = exports.SET = "SET";
var INIT = exports.INIT = "INIT";
var APPLICATION = exports.APPLICATION = "APPLICATION";
var FLAG = exports.FLAG = "FLAG";
var FILTER = exports.FILTER = "FILTER";

// auth Actions
var LOGOUT = exports.LOGOUT = "LOGOUT";
var LOGIN = exports.LOGIN = "LOGIN";

var SESSION_EXPIRED = exports.SESSION_EXPIRED = "SESSION_EXPIRED";

var LINKEDIN = exports.LINKEDIN = "linkedin";
var FACEBOOK = exports.FACEBOOK = "facebook";
var PROVIDER = exports.PROVIDER = "PROVIDER";

// common Actions
var ALERT = exports.ALERT = "ALERT";
var NOTIFICATION = exports.NOTIFICATION = "NOTIFICATION";
var REDIRECT = exports.REDIRECT = "REDIRECT";
var RESET = exports.RESET = "RESET";
var SHOW = exports.SHOW = "SHOW";
var HIDE = exports.HIDE = "HIDE";
var HIDED = exports.HIDED = "HIDED";
var WARNING = exports.WARNING = "WARNING";
var ACCEPT = exports.ACCEPT = "ACCEPT";
var DECLINE = exports.DECLINE = "DECLINE";
var REJECT = exports.REJECT = "REJECT";
var APPROVE = exports.APPROVE = "APPROVE";
var STEP = exports.STEP = "STEP";
var CONFIRMATION = exports.CONFIRMATION = "CONFIRMATION";
var PREVIEW = exports.PREVIEW = "PREVIEW";
var CURRENT = exports.CURRENT = "CURRENT";
var QUEUE = exports.QUEUE = "QUEUE";
var ACCEPTED = exports.ACCEPTED = "ACCEPTED";
var FEEDBACK = exports.FEEDBACK = "FEEDBACK";
var SUBSCRIPTION = exports.SUBSCRIPTION = "SUBSCRIPTION";
var SUBSCRIPTIONS = exports.SUBSCRIPTIONS = "SUBSCRIPTIONS";
var ORDER = exports.ORDER = "ORDER";
var ACTIVATE = exports.ACTIVATE = "ACTIVATE";
var DEACTIVATE = exports.DEACTIVATE = "DEACTIVATE";
var INITIAL = exports.INITIAL = "INITIAL";
var CONNECT = exports.CONNECT = "CONNECT";
var DISCONNECT = exports.DISCONNECT = "DISCONNECT";
var CONFIRM = exports.CONFIRM = "CONFIRM";
var COUNT = exports.COUNT = "COUNT";
var CLOSE = exports.CLOSE = "CLOSE";
var MODAL = exports.MODAL = "MODAL";
var MARK = exports.MARK = "MARK";
var HIRED = exports.HIRED = "HIRED";
var NOT = exports.NOT = "NOT";
var NEXT = exports.NEXT = "NEXT";

// do not use it for server request, it is for requesting an action
var CHANGE_REQUEST = exports.CHANGE_REQUEST = "CHANGE_REQUEST";
var DELETE_REQUEST = exports.DELETE_REQUEST = "DELETE_REQUEST";

// 0 - candidate pending - show accept/reject buttons
// 1 - candidate declined - nothing to show
// 2 - candidate accepted - show pending
// 3 - company declined - show rejected
// 4 - company accepted - show accepted
// 5 - candidated expired - show expired
// 6 - company expired - show expired

var CANDIDATE_PENDING = exports.CANDIDATE_PENDING = "CANDIDATE_PENDING";
var CANDIDATE_DECLINED = exports.CANDIDATE_DECLINED = "CANDIDATE_DECLINED";
var CANDIDATE_ACCEPTED = exports.CANDIDATE_ACCEPTED = "CANDIDATE_ACCEPTED";
var COMPANY_DECLINED = exports.COMPANY_DECLINED = "COMPANY_DECLINED";
var COMPANY_ACCEPTED = exports.COMPANY_ACCEPTED = "COMPANY_ACCEPTED";
var CANDIDATE_EXPIRED = exports.CANDIDATE_EXPIRED = "CANDIDATE_EXPIRED";
var COMPANY_EXPIRED = exports.COMPANY_EXPIRED = "COMPANY_EXPIRED";
var COMPANY_REJECTED = exports.COMPANY_REJECTED = "COMPANY_REJECTED";
var COMPANY_APPROVED = exports.COMPANY_APPROVED = "COMPANY_APPROVED";

var MATCH_STATUSES = exports.MATCH_STATUSES = (_MATCH_STATUSES = {}, _defineProperty(_MATCH_STATUSES, CANDIDATE_PENDING, "0"), _defineProperty(_MATCH_STATUSES, CANDIDATE_DECLINED, "1"), _defineProperty(_MATCH_STATUSES, CANDIDATE_ACCEPTED, "2"), _defineProperty(_MATCH_STATUSES, COMPANY_DECLINED, "3"), _defineProperty(_MATCH_STATUSES, COMPANY_ACCEPTED, "4"), _defineProperty(_MATCH_STATUSES, CANDIDATE_EXPIRED, "5"), _defineProperty(_MATCH_STATUSES, COMPANY_EXPIRED, "6"), _defineProperty(_MATCH_STATUSES, COMPANY_REJECTED, "7"), _defineProperty(_MATCH_STATUSES, COMPANY_APPROVED, "8"), _MATCH_STATUSES);

// Image uploader / cropper
var IMG_UPLOAD_LIMIT = exports.IMG_UPLOAD_LIMIT = 1000000; // ~1mb limit
var IMG_ACCEPTED_TYPES = exports.IMG_ACCEPTED_TYPES = "image/*";

// Facebook MessengerExtension plugin for chatbot webhooks
var FINISHED_REGISTRATION = exports.FINISHED_REGISTRATION = "FINISHED_REGISTRATION";
var CONTEXT = exports.CONTEXT = "CONTEXT";