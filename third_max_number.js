// 414. Third Maximum Number

function thirdMax(nums){
  let uniqueArr = [...new Set(nums)].sort((a,b)=>b-a)
  return uniqueArr[2] !== undefined?uniqueArr[2] : uniqueArr[0]
}

let nums = [50,29,116,265,11,17,125]
console.log(thirdMax(nums));