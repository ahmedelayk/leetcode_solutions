// 657. Robot Return to Origin
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x=0,y=0;
    for(let i=0;i<moves.length;i++){
      if(moves[i]==='U')y++;
      if(moves[i]==='D')y--;
      if(moves[i]==='R')x++;
      if(moves[i]==='L')x--;
    }
    return x==0 && y==0
};

console.log(judgeCircle("UD")); // Output: true
console.log(judgeCircle("LL")); // Output: false