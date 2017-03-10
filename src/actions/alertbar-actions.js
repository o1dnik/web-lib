import {ALERT, SHOW, HIDE} from '../constants';

export function showAlertBar(notification) {
  return {
    type: ALERT + SHOW,
    payload: {notification}
  };
}

export function hideAlertBar() {
  return {
    type: ALERT + HIDE
  };
}
