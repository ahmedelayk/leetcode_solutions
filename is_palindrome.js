// 125. Valid Palindrome

var isPalindrome = function(s) {
  // s = s.match(/[a-zA-Z0-9]+/ig).join("").toLowerCase;
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log(s)
  for(let i=0;i<s.length/2;i++){
      if(s[i] !== s[s.length-i-1])
          return false;
  }
  return true;
};

s= "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

// console.log(s.match(/[a-zA-Z]/ig).join(""))