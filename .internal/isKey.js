import isSymbol from '../isSymbol.js'

/** Used to match property names within property paths. */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  // value = a[0].b.c
  // object = { 'a': [{ 'b': { 'c': 3 } }] }
  if (Array.isArray(value)) {
    return false
  }
  const type = typeof value
  if (type == 'number' || type == 'boolean' || value == null || isSymbol(value)) {
    return true
  }

  //使用 || 或是 && 消除 if
  //reIsPlainProp 是否单一属性 "name"
  //reIsDeepProp 是否包含了 .[]这种特殊字符串
  // value in Object value 是否直接是 Object的属性
  //in 的这种方式只能判断一层
  //var obj={age:18,struct:{"name":"zhangsan"}}
  //"struct" in obj ==>true
  //"struct.name" in obj ==> false
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
}

export default isKey
