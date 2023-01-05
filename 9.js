var isPalindrome = function(x) {
  const stringX = x.toString(10)
  //split x into an array
  //reverse the array
  //join into string
  //return the array
  return stringX.split("").reverse().join("") === stringX
};
