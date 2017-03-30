import {NOTIFICATION, SHOW, HIDE} from '../constants';

export function showNotification(notification) {
  if (!notification.key) {
    notification.key = Date.now();
  }

  return {
    type: NOTIFICATION + SHOW,
    payload: {notification}
  };
}

export function hideNotification(notification) {
  return {
    type: NOTIFICATION + HIDE,
    payload: {notification}
  };
}
