var isValid = function(s) {
  // create a map with valid characters
  const mapChar = {")": "(", "]": "[", "}": "{"}
  // create a variable to store opened chars
  let storage = ""
  // traverse through s
  for(let i = 0; i < s.length ; i++){
  // check if it is a valid map key
      if(mapChar[s[i]] !== undefined){
          //check if the last char on the storage is the keyvalue
          if(storage.slice(-1) === mapChar[s[i]]){
          //if yes remove it from storage
          storage = storage.slice(0, -1)
          } else {
          // if not return false
              return false
          }
      } else {
          // if no concatenate it
          storage += s[i]
      }
  }
  //if storage is empty return true if not return false
  return storage === "" ? true : false
};
