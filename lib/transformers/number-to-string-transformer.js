var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

export default function (res) {
  res.data = changeNumberToStringInObjectProps(res.data, ['id', 'level', 'role_id', 'career_level', 'language_id', 'category_id', 'ref_id', 'job_types', 'user', 'status']);

  return res;
}

export function changeNumberToStringInObjectProps(object) {
  var paths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['id'];

  var newObject = {};

  Object.keys(object).forEach(function (key) {
    if (object[key] === null || object[key] === undefined) {
      return;
    }

    if (paths.includes(key) && typeof object[key] === 'number') {
      newObject[key] = String(object[key]);
      return;
    }

    if (_typeof(object[key]) === 'object' && !Array.isArray(object[key]) && object[key].toString() === '[object Object]') {
      newObject[key] = changeNumberToStringInObjectProps(object[key], paths);
      return;
    }

    if (Array.isArray(object[key])) {
      newObject[key] = changeNumberToStringInArrayProps(object[key], key, paths);
      return;
    }

    newObject[key] = object[key];
  });

  return newObject;
}

export function changeNumberToStringInArrayProps(array, key, paths) {
  return array.map(function (item) {
    if (paths.includes(key)) {
      if (typeof item === 'number') {
        return String(item);
      }
    }

    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item) && item.toString() === '[object Object]') {
      return changeNumberToStringInObjectProps(item, paths);
    }

    if (Array.isArray(item)) {
      return changeNumberToStringInArrayProps(item);
    }

    return item;
  });
}