// leetcode 771.Jewels and Stones
var numJewelsInStones = function(jewels, stones) {
  let counter = 0;
  for(let i=0;i<stones.length;i++)
    if(jewels.indexOf(stones[i]) > -1) counter++;
  return counter;
};

console.log(numJewelsInStones('ale', 'ahmed elsayed elayek'));