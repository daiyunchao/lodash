import castPath from './castPath.js'
import toKey from './toKey.js'

/**
 * The base implementation of `get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  //模拟参数:
  //  object = { 'a': [{ 'b': { 'c': 3 } }] }
  //  path=a[0].b.c
  //  path=['a', '0', 'b', 'c']
  path = castPath(path, object)
  //path=[a,0,b,c]
  let index = 0
  const length = path.length

  while (object != null && index < length) {
    //通过数组下标获取数组中的元素:
    // arr[0]== arr["0"]
    object = object[toKey(path[index++])]
  }
  return (index && index == length) ? object : undefined
}

export default baseGet
