// 1281. Subtract the Product and Sum of Digits of an Integer

var subtractProductAndSum = function(n) {
  let productOfDigits = 1, sumOfDigits = 0;
  let digits = n.toString().match(/[0-9]/g)
  for(let i=0;i<digits.length;i++){
    productOfDigits *= parseInt(digits[i]);
    sumOfDigits += parseInt(digits[i]);
  }
  return productOfDigits-sumOfDigits;
};

console.log(subtractProductAndSum(415))

// 20 - 10