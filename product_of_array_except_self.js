// 238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//   let answers = [1,1,1,1]
//   for(let i=0;i<nums.length;i++){
//     let j = 0
//     if(i !== j){
//       answers[j] *= nums[i]
//     }
//     if(i === nums.length-1)
//       j++;
//   }
//   return answers
// };

// var productExceptSelf = function(nums) {
//   // Value to increment per each index
//   let carry = 1
//   // Array to return all the product values
//   const output = Array(nums.length).fill(1)
//   // Add products to output array starting at the front
//   for(let i = 0; i < nums.length;i++){
//     output[i]*=carry
//     console.log('carry before',carry);
//     carry*=nums[i]
//     console.log('carry after',carry);
//   }
//   console.log('output array',output);
//   // Reset carry
//   carry = 1
//   // Add products to output array starting at the back
//   for(let i = nums.length-1; i >= 0; i--){
//       output[i]*=carry
//       carry*=nums[i]
//   }
//   return output
// };


function productExceptSelf(nums) {
  const n = nums.length;
  const leftProduct = new Array(n).fill(1);
  const rightProduct = new Array(n).fill(1);
  const output = new Array(n).fill(1);
  let carry = 1
  // Calculate the product of all elements to the left of each element
  for (let i = 1; i < n; i++) {
    // leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
    leftProduct[i] *= carry;
    carry *= nums[i]
  }
  console.log('leftProduct',leftProduct);
  // Calculate the product of all elements to the right of each element
  carry = 1
  for (let i = n - 2; i >= 0; i--) {
    // rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
    carry *= nums[i+1]
    rightProduct[i] *= carry;
  }
  console.log('rightProduct',rightProduct);

  // Calculate the final output array
  for (let i = 0; i < n; i++) {
    output[i] = leftProduct[i] * rightProduct[i];
  }

  return output;
}


let nums = [1,2,3,4];
console.log(nums);
console.log(productExceptSelf(nums));