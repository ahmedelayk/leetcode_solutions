// 704. Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function(nums, target) {
  let start = 0, end = nums.length -1
  while(start <= end){
    let mid = Math.floor((start + end)/2)
    if(nums[mid] === target)
      return mid
    else if(target > nums[mid])
      start = mid + 1
    else if(target < nums[mid])
      end = mid - 1
  }
  return -1
}

// function binarySearch(nums, target, start, end){
//   if(start > end ) return -1
//   let middle = Math.floor((start+end)/2)
//   if(target === nums[middle])
//     return middle
//   if(target > nums[middle])
//     return binarySearch(nums, target, middle+1, end)
//   else
//     return binarySearch(nums, target, start, middle-1)
// }

// let nums = [-1,0,3,5,9,12], target = 9;
let nums = [5], target = 5;
console.log(binarySearch(nums, target, 0, nums.length-1));