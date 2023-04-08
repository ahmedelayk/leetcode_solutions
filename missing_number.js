// 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let max = Math.max(...nums)
  for(let i=0;i<=max;i++){
    if(nums.indexOf(i) === -1){
      return i
    }
  }
  return max+1
};
console.log(missingNumber([1,0,3]));