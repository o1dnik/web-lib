export default function(res) {

  res.data = changeNumberToStringInObjectProps(
    res.data,
    [
      'id',
      'level',
      'role_id',
      'career_level',
      'language_id',
      'category_id',
      'ref_id',
      'job_types',
      'user'
    ]
  );

  return res;

}

export function changeNumberToStringInObjectProps(object, paths = ['id']) {

  const newObject = {};

  Object.keys(object).forEach(key => {

    if (object[key] === null || object[key] === undefined) {
      return;
    }

    if (paths.includes(key) && typeof object[key] === 'number') {
      newObject[key] = String(object[key]);
      return;
    }

    if (
      typeof object[key] === 'object' && !Array.isArray(object[key]) &&
      object[key].toString() === '[object Object]'
    ) {
      newObject[key] = changeNumberToStringInObjectProps(object[key], paths);
      return;
    }

    if (Array.isArray(object[key])) {
      newObject[key] = changeNumberToStringInArrayProps(
        object[key], key, paths
      );
      return;
    }

    newObject[key] = object[key];

  });

  return newObject;

}

export function changeNumberToStringInArrayProps(array, key, paths) {

  return array.map(item => {

    if (paths.includes(key)) {
      if (typeof item === 'number') {
        return String(item);
      }
    }

    if (
      typeof item === 'object' && !Array.isArray(item) &&
      item.toString() === '[object Object]'
    ) {
      return changeNumberToStringInObjectProps(item, paths);
    }

    if (Array.isArray(item)) {
      return changeNumberToStringInArrayProps(item);
    }

    return item;

  });

}
