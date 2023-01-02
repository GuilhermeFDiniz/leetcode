/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  // declaring left and right sum
  let rightSum = 0
  for(let i = 0; i < nums.length; i++){
          rightSum += nums[i]
      }
  let leftSum = 0
  let index = -1
  for(let i = 0; i < nums.length; i++){
    rightSum -= nums[i]
    if(i > 0){
        leftSum += nums[i-1]
    }
    if(leftSum === rightSum){
        index = i
        break;
    }
  }
  return index
}
