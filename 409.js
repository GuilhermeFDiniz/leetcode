var longestPalindrome = function(s) {
  // create a map object
  let map = {}
  // declare a sum variable
  let sum = 0
   // traverse through s
  for(let i = 0; i < s.length; i++){
      // check if map has the key
      if(!map[s[i]]){
           // if not create a key
          map[s[i]] = 1
      } else {
          // if so add 2 to sum and delete the key
          delete map[s[i]]
          sum += 2
      }
  }
   // check if map object is empty if not add 1 to sum
  if(Object.keys(map).length !== 0){
      sum += 1
  }
   // return sum
    return sum
};
