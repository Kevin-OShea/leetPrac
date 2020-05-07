let twoSum = function(nums, target) {
  console.log(nums);
  console.log(target);
  for(let i = 0; i < nums.length - 1; i++)
  {
    for(let j = i + 1; j < nums.length; j++)
    {
      if(nums[i] + nums[j] == target)
      {
        return [i,j];
      }
    }
  }
};

let testArray = [3,2,4];
let testNum = 6;
console.log(twoSum(testArray, testNum));
