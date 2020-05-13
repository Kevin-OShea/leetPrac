var findMedianSortedArrays = function(nums1, nums2) {
  // let sum1 = nums1[0] + nums1[nums1.length - 1];
  // let sum2 = nums2[0] + nums2[nums2.length - 1];
  // let total = sum1 + sum2;
  // total = total / 4;
  // return total;
if(nums1.length > 0 && nums2.length > 0)
{
  // let first = nums1[0];
  // let last = nums2[nums2.length - 1];
  // let total = first + last;
  // console.log(first + ' first || last ' + last + ' total || ' + total)
  // total = total / 2;
  // return total;
  let sum1 = Math.abs(nums1[0] + nums1[nums1.length - 1]);
  let sum2 = Math.abs(nums2[0] + nums2[nums2.length - 1]);
  let total = sum1 + sum2;
  total = total / 4;
  return total;
} else if(nums1.length == 0){
  let first = nums2[0];
  let last = nums2[nums2.length - 1];
  return (first + last ) / 2;
} else if(nums2.length == 0){
  let first = nums1[0];
  let last = nums1[nums1.length - 1];
  return (first + last ) / 2;
}
};

let testOne = [1,3];
let testTwo = [2];
console.log(findMedianSortedArrays(testOne, testTwo));
