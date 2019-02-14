import baseWhile from './.internal/baseWhile.js'

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * dropWhile(users, ({ active }) => active)
 * // => objects for ['pebbles']
 */

 //我的版本
function my_dropWhile(source_arr,dropFilter){
	if(!Array.isArray(source_arr))throw new Error("first argument not array");
	let slice_arr=[];
	let index=0;
	let ret_arr=[];
	while(source_arr.length>slice_arr.length){
		slice_arr[index]=source_arr[index];
		index++;
	}
	if(typeof dropFilter==="function"){
	//如果是函数
		ret_arr=slice_arr.filter((item)=>{
			return !dropFilter(item);
		})
	}
	
	else if (Array.isArray(dropFilter)){
	}
	
	else if(typeof dropFilter==="object"){
	ret_arr=slice_arr.filter((item)=>{
			if(typeof item=="object"){
				let itemStr=JSON.stringify(item);
				let dropFilterStr=JSON.stringify(dropFilter);
				return itemStr!==dropFilterStr;
			}
			return true;
		})
	}
	return ret_arr;
}

function dropWhile(array, predicate) {
  return (array != null && array.length)
    ? baseWhile(array, predicate, true)
    : []
}

export default dropWhile
