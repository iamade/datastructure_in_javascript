// function NumberOfRepetiton(nums){
//     let repeatCheck = {};
//     for(let i =0; i < nums.length; i++){
//        // repeatCheck[nums[i]] = i
//         if(repeatCheck[nums[i]] !== undefined){
//            console.log('repit',nums[i]);
//          return nums[i]
//         }
//         else{
//             repeatCheck[nums[i]] = i
//         }
//     }
//     console.log('repit2',repeatCheck);
//     // return undefined
// }

// NumberOfRepetiton([3,2,3])

// /*********Maximum number and number of occurrence**********/

// function ScoreBoard(nums) {
//     let repeatCheck = {}, maxCount = 1;
//     let maxElement = nums[0]
//     for(let i = 0; i < nums.length; i++)
//     {
//         if (repeatCheck[nums[i]] == null){
//             repeatCheck[nums[i]] = 1
//         }
//         else {
//             repeatCheck[nums[i]]++
//             console.log('repeatCheck', repeatCheck[nums[i]]);
//         }
//         if(repeatCheck[nums[i]] > maxCount){
//             maxElement = nums[i]
//             maxCount = repeatCheck[nums[i]]
//         }
        
//     }
//      console.log(maxCount)
//      return maxElement
// }

// ScoreBoard([1,2,2,1,2,2])

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
// ***/

// //1. Using Hashmap

// function twoSum(nums, target){
//     const numToIndex = new Map()
//     for(let i =0; i < nums.length; i++){
//         const complement = target - nums[i]
//         if(numToIndex.has(complement)){
//             console.log([numToIndex.get(complement), i]);
//             // return [numToIndex.get[complement], i]
//         }
//         numToIndex.set(nums[i],i)
//     }
// }
// twoSum(nums = [2,7,11,15], target = 9)

// // 
// console.log('are u here');