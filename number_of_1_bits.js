// 191. Number of 1 Bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight2 = function(n) {
  return n.toString().match(/1/g).length
};

// console.log(hammingWeight(1111000011))
// console.log(1111000011..toString())

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count=0
    let arr=n.toString(2)
    for(let num of arr){
        if(num === '1'){
            count++
        }
    }
    return count
}