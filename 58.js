var lengthOfLastWord = function(s) {
  // remove white spaces from boundaries
  // break apart each word between whitespaces
  // return the length of the word in the last position of the array
  return s.trim().split(' ').at(-1).length
};
