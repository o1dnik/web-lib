import {NOTIFICATION, SHOW, HIDE} from '../constants';
import {getActionType} from '../helpers/utils';

export function showNotification(notification) {
  if (!notification.key) {
    notification.key = Date.now();
  }

  return {
    type: getActionType(NOTIFICATION, SHOW),
    payload: {notification}
  };
}

export function hideNotification(notification) {
  return {
    type: getActionType(NOTIFICATION, HIDE),
    payload: {notification}
  };
}
