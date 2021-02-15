
Array.prototype.myMap = function(Fn){
     
  // if(Object.prototype.toString.call(this) !== '[object Array]'){
  //   throw error(`${this}八是数组！`)
  // }
     let result = []
    
     const newArr = [...this]
     let len=newArr.length
     console.log(newArr)

     for(let i=0;i<len;i++){
        result.push(Fn(newArr[i],i))
     }

     return result;
  
}
//TEST EX
const mapExArr = [1,2,3,4,'5']
const mapEx = {one:'one',two:'two',length:2}
const mapExRes = mapExArr.myMap(item => item*2)
console.log(mapExRes)
