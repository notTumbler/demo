

/**
 * 
 * @param {String||Arr} Str 
 * return String;
 */
function reverseStr(Str){

  const stack = []
  stack.push(...Str)

  let output = ''
  for(let i=0,len=stack.length;i<len;i++){
    output += stack.pop();
  }
  return output
}

const res  = reverseStr('exarr')
console.log(res)