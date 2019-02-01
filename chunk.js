import slice from './slice.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  //先计算外层数组的元素个数
  //Math.ceil 向上取整
  //new Array(number) 声明一个长度为number的新数组
  const result = new Array(Math.ceil(length / size))

  while (index < length) {

    //slice方法: 在不需要原来数组的基础上,将数组中的部分元素防到一个新的数组中
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

//实现了 我的chunk方法
//我实现的方法 问题: 1.修改了原数组 2.参数没有考虑周全
function my_chunk(arr,item_count){
	if(!Array.isArray(arr)){
		throw new Error("arr args is not array")
	}
	let arr2=[];
	while (arr.length>0){
		let newArr=[];
		newArr=arr.splice(0,item_count);
		arr2.push(newArr)
	}
}

export default chunk
