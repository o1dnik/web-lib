import {distanceInWordsToNow, differenceInMilliseconds} from 'date-fns';
import {isEmpty, isNil, has} from 'lodash-es';

export function arrayToObject(array, idProp) {
  const obj = {};
  array.forEach(i => obj[i[idProp]] = i);
  return obj;
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

  });
}

export function renderExpires(expiresAt) {

  const diff = differenceInMilliseconds(expiresAt, Date.now());
  const time = distanceInWordsToNow(expiresAt, {addSuffix: true});

  return diff > 0 ? `Expires ${time}` : `Expired ${time}`;

}

export function handleFieldArrayItemAdd(fields) {
  return () => fields.push({});
}

export function handleFieldArrayItemRemove(fields, idx, amountRequired = 0) {
  return () => {
    if (fields.length > amountRequired) {
      fields.remove(idx);
    }
  };
}

export function filterDoubleSelectEmptyValues(item) {

  if (!item || isEmpty(item)) return false;

  if (isNil(item.id) || item.id === '') return false;

  if (isNil(item.level) || item.level === '') return false;

  return true;

}

export function createReducer(actionHandlers, defaultState) {
  return function(state = defaultState, action) {

    if (has(actionHandlers, action.type)) {
      return actionHandlers[action.type](state, action);
    }

    return state;

  };
}

export function getActionType(...strings) {
  return strings.join('_');
}
