/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array) {
  let resIndex = 0
  const result = []

  if (array == null) {
    return result
  }
  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

//我的实现方式
function my_compact(arr) {
  if (!arr) {
    return [];
  }
  if (!Array.isArray(arr)) {
    throw new Error("arr is not arrary")
  }
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (item) {
      retArr.push(item)
    }
  }
  return retArr;
}

//对比:
//使用for of 直接从数组中获取值
// for 获取的是下标,要得到值还得 let element=arr[i]
//for of 遍历数组要简单一些

// for of 的其他用法
let map =new Map();
map.set("name","zhangsan")
map.set("age",19)
for(let [key,value] of map){
  console.log("key==>",key);
  console.log("value==>",value);
}


export default compact
