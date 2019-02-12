import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import map from '../map.js'
import cacheHas from './cacheHas.js'

/** Used as the size to enable large array optimizations. */
const LARGE_ARRAY_SIZE = 200

/**
 * The base implementation of methods like `difference` without support
 * for excluding multiple arrays.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  //是否包含的方法:
  let includes = arrayIncludes

  //是否通用的比较方法
  let isCommon = true

  //结果
  const result = []

  //被比较数组的长度
  const valuesLength = values.length

  //如果源数组没有length属性则 直接返回 []
  if (!array.length) {
    return result
  }
  //如果有迭代器,将被比较的数组执行迭代,返回新的数组
  if (iteratee) {
    values = map(values, (value) => iteratee(value))
  }

  //如果有比较器则
  if (comparator) {
    includes = arrayIncludesWith
    isCommon = false
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas
    isCommon = false
    values = new SetCache(values)
  }
  outer:
  for (let value of array) {
    //遍历原数组中的每一项
    //判断是否有迭代器,如果有迭代器则将值进行迭代
    const computed = iteratee == null ? value : iteratee(value)

    value = (comparator || value !== 0) ? value : 0
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength
      //内部循环,将被比较的数组中获取每一项,同原数组中的值进行比较
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          //如果存在则跳出for循环
          continue outer
        }
      }
      //如果不存在则添加到结果中
      result.push(value)
    }
    //如果是非同用比较,则调用includes进行比较
    else if (!includes(values, computed, comparator)) {
      //如果不存在则添加到结果数组中
      result.push(value)
    }
  }
  return result
}

export default baseDifference
