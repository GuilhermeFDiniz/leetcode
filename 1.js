var twoSum = function(nums, target) {
  // Declare a Map variable
  let hashMap = {}
  // make a loop to traverse nums
  for(let i = 0; i< nums.length; i++){
  // make a variable = target - nums
  let seek = target - nums[i]
  // compare if you have the value in the map
    if(hashMap[seek] !== undefined){
    // if so return the index of loop and the key value
        return [hashMap[seek], i]
    } else {
    // if not create a hash with the key = num[index] and value = index
    hashMap[nums[i]] = i
    }
  }
};
