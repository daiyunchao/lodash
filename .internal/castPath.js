import isKey from './isKey.js'
import stringToPath from './stringToPath.js'

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  //  object = { 'a': [{ 'b': { 'c': 3 } }] }
  //  value=a[0].b.c
  //  value=['a', '0', 'b', 'c']
  if (Array.isArray(value)) {
    return value
  }
  //isKey:value是否直接是object的属性
  //stringToPath 将a[0].b.c 转换成 [a,0,b,c]
  return isKey(value, object) ? [value] : stringToPath(value)
}

export default castPath
