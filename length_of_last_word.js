// leetcode 58
var lengthOfLastWord = function(s) {
  let arr = s.trim().split(" ");
  let lastWord = arr[arr.length-1];
  return lastWord.length;
};

console.log(lengthOfLastWord("ahmed elayek"));

