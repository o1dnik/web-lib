'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Static values
var JOB_TYPES = exports.JOB_TYPES = [{ id: '1', name: 'Full time' }, { id: '2', name: 'Part time' }, { id: '3', name: 'Contract' }, { id: '4', name: 'Internship' }, { id: '5', name: 'Temporary' }];

var JOB_LEVELS = exports.JOB_LEVELS = [{ id: '0', name: '0 - 1 Years' }, { id: '1', name: '2 - 3 Years' }, { id: '2', name: '4 - 6 Years' }, { id: '3', name: '7+ Years' }];

var RELOCATE_OPTIONS = exports.RELOCATE_OPTIONS = [{ value: '0', label: 'Yes' }, { value: '1', label: 'No' }];

var LANG_LEVELS = exports.LANG_LEVELS = [{ id: '0', name: 'A1 - Beginner' }, { id: '1', name: 'A2 - Elementary' }, { id: '2', name: 'B1 - Intermediate' }, { id: '3', name: 'B2 - Upper Intermediate' }, { id: '4', name: 'C1 - Advanced' }, { id: '5', name: 'C2 - Mastery' }, { id: '6', name: 'Native' }];

var DEFAULT_LANGS = exports.DEFAULT_LANGS = [{ id: '40', name: 'English' }, { id: '51', name: 'German' }, { id: '148', name: 'Spanish' }, { id: '47', name: 'French' }, { id: '128', name: 'Portuguese' }, { id: '70', name: 'Italian' }, { id: '133', name: 'Russian' }, { id: '7', name: 'Arabic' }, { id: '72', name: 'Japanese' }, { id: '59', name: 'Hindi' }, { id: '20', name: 'Chineese' }];

var CAREER_LEVELS = exports.CAREER_LEVELS = [{ id: '0', name: 'Student' }, { id: '1', name: 'Entry level' }, { id: '2', name: 'Intermediate' }, { id: '3', name: 'Senior' }, { id: '4', name: 'Lead' }, { id: '5', name: 'Head' }, { id: '6', name: 'Executive' }];

var CONFIRMATION_REASONS = exports.CONFIRMATION_REASONS = [{ id: '1', name: 'Education' }, { id: '2', name: 'Experience' }, { id: '3', name: 'Skill-set' }, { id: '4', name: 'Leadership' }, { id: '5', name: 'languages' }, { id: '6', name: 'Location' }, { id: '7', name: 'References' }, { id: '0', name: 'Other' }];

var AVAILABLE_SUBSCRIPTIONS = exports.AVAILABLE_SUBSCRIPTIONS = [{
  name: 'Basic',
  price: '349',
  id: '2',
  intros_max: 15,
  jobs_max: 5,
  additions: []
}, {
  name: 'Professional',
  price: '999',
  id: '3',
  intros_max: 50,
  jobs_max: 30,
  additions: []
}];

// JOB STATUSES:
var STATUSES_TEXT_MAP = exports.STATUSES_TEXT_MAP = {
  ACT: 'Active',
  REV: 'Pending review',
  PAU: 'Paused',
  DEL: 'Deleted'
};

var STATUSES_COLOR_MAP = exports.STATUSES_COLOR_MAP = {
  ACT: 'primary',
  REV: 'danger',
  PAU: 'default',
  DEL: 'default'
};