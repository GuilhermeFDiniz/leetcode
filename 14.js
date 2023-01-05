var longestCommonPrefix = function(strs) {
  // create a variable to store the commonstring
  let commonString = ""
  // traverse through letters from first stris
  for(let i = 0; i < strs[0].length; i++){
  // traverse through strs
       for(let k = 0; k<strs.length; k++){
  // check if all the strs have the letter in the index position
           if(strs[0][i] === strs[k][i]){
  // concatenate the letter into the the variable
               if(k === (strs.length - 1)){
                   commonString += strs[0][i]
               }
           } else {
  // else return variable
               return commonString
           }
       }
   }
   // return variable
   return commonString
};
