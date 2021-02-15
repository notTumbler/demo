/**
*  判断InitValue是否传入，
*  -- 是：数组从第一项开始执行
*  -- 否：将数组的第一项赋值给InitValue,并且数组从第二项开始执行
*/

/**
 * 
 * @param {Array} arr 
 * @param {Fn} callback 
 * @param {any} initValue 
 */

function reduce(arr,callback,initValue){
  var startIndex = initValue == undefined ? 1 : 0;
  let register = initValue == undefined ? arr[0] : initValue;
  // let register;
  for(let len=arr.length;startIndex<len;startIndex++){
    register = callback(register,arr[startIndex])
  }
  return register;
}


const res = reduce([1,2,3],(pre,item) =>{
  return pre += item;
},'hello')

// const res = [1,3,4].reduce((pre,item) => {
//   return pre += item
// })

console.log(res)