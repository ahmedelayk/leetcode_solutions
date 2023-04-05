// 118. Pascal's Triangle


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let pascalArr = [];
  for(let i=0;i<numRows;i++){
    pascalArr[i] = [];
    pascalArr[i][0] = 1;
    for(let j=1;j<i;j++){
      pascalArr[i][j] = pascalArr[i-1][j-1] + pascalArr[i-1][j]
    }
    pascalArr[i][i] = 1;
  }
  return pascalArr;
};



console.log(generate(5)); // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // Output: [[1]]