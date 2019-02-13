import slice from './slice.js'

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */

 //我的版本
function my_drop(source_arr,dropCount){
	if(!Array.isArray(source_arr))throw new Error("first argument not array");
	dropCount=(!dropCount&&dropCount!=0&&1)||dropCount;
	if(dropCount>source_arr.length) return []
	let slice_arr=[];
	let index=0;
	while(source_arr.length>slice_arr.length){
		slice_arr[index]=source_arr[index];
		index++;
	}
	source_arr.splice(0,dropCount);
	return source_arr;
}


function drop(array, n=1) {
  const length = array == null ? 0 : array.length
  return length
    ? slice(array, n < 0 ? 0 : n, length)
    : []
}

// 对比:
// lodash使用的是slice方法获取数组的一部分
// 对比,我的方法多了一次 splice的过程
export default drop
