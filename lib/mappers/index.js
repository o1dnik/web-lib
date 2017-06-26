import _flatMap from 'lodash/flatMap';
import _memoize from 'lodash/memoize';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

export var mapRolesFactory = function mapRolesFactory() {
  return _memoize(function (items) {
    return _flatMap(items, function (c) {
      return [{ name: c.name, isCategory: true, id: c.name }].concat(_toConsumableArray(c.roles));
    });
  });
};