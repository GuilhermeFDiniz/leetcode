var romanToInt = function(s) {
  // map all roman numbers
  const mapRoman = {I: 1, V: 5, X: 10, L:50, C:100, D:500, M:1000}
  // declare a variable to store total
  let total = 0
  // traverse through s
  for(let i = 0; i < s.length; i++){
    //for each word verify if its value is less than the next
      if(mapRoman[s[i]] < mapRoman[s[i+1]]){
        // if so subtract from total
          total -= mapRoman[s[i]]
      } else {
        //if not sum to total
          total += mapRoman[s[i]]
      }
  }
  // return total
  return total
};
