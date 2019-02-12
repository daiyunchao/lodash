import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */

 //我的方法:
function my_difference(source_arr, ...args) {
  let temp_arr = [];
  let difference_arr = [];
  if (!Array.isArray(source_arr)) throw new Error("first argument is not array");
  for (let value of args) {
    if (Array.isArray(value)) {
      temp_arr.push(...value);
    } else {
      temp_arr.push(value)
    }
  }
  let _set = new Set(temp_arr);
  for (let value of source_arr) {
    !_set.has(value) && difference_arr.push(value);
  }
  return difference_arr;
}

function difference(array, ...values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : []
}

export default difference
