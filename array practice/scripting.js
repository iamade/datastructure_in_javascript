/*** 1. Two Sum
 * * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

/*******
 * Move Zeroes
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
*/

// moveZeroes = (nums) => {
//     let j = 0;

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === 0){
//             j++
//             console.log(nums)
//         }
//         else {
//             [nums[i-j], nums[i]] = [nums[i], nums[i-j]]
//             console.log(nums)
//         }
//     }
//     // console.log(nums)
// }

// nums = [0,1,0,3,12]
// moveZeroes(nums)


/******
 * Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109


 */
/******Answer using Hash Maps */
    // containsDuplicate = (nums) => {
    //     let repeatCheck = {};
    //     for(let i = 0; i < nums.length; i++){
    //         if(repeatCheck[nums[i]] == null){
    //             repeatCheck[nums[i]] = 1
    //         }else {
    //             repeatCheck[nums[i]]++
    //             console.log(true)
    //             // return true
    //         }
    //     }
    //     console.log(false)
    //     // return false
    // }

/******Answer using sort and array */
// containsDuplicate = (nums)=> {
//     nums.sort((a,b) => a -b)
//     for(let i =0; i <nums.length - 1; i++) {
//         if(nums[i] == nums[i+1]){
//             return true
//         }
//     }
//     return false
// }

/*****Answer using Set */
// containsDuplicate = (nums) => {
//     const s = new Set(nums);
//     console.log(s.size !== nums.length);
//     return s.size !== nums.length
// }

// nums = [1,3,2,4]
// containsDuplicate(nums)

/***** Rotate Array
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

 

*/

/*****Answer for Rotate Array */

// rotate = (nums, k) => {
//     if(nums.length <= k){
//         for(let i =0; i < k; i++){
//             nums.unshift(nums[nums.length - 1])
//             nums.pop()
//             console.log(nums)
//         }
        
//     }
//     else{
//         let arr = nums.splice(nums.length - k)
//         nums.unshift(...arr)
//         console.log(nums)
//     }
// }

// nums = [1,2,3,4,5,6,7], k = 3
// rotate(nums, k)

// function LongestWord(sen) {
//     var arr = sen.match(/[a-z] + /gi);

//     var sorted = arr.sort(function(a,b) {
//         return b.length - a.length;
//     });

//     return sorted[0]
// }

// sen ="fun&!! time"
// LongestWord(sen)




/********************Number of Good Pairs********************* 
 * Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:

Input: nums = [1,2,3]
Output: 0

 * 
Answer


function numIdenticalPairs(nums){
    let count = {}
    let answer = 0

    for(x of nums){
        answer += count[x] || 0;
        count[x] = (count[x] || 0 ) +  1
    }

    console.log('ans', answer)
}

nums = [1,2,3,1,1,3]
numIdenticalPairs(nums)

*/




/********** **********
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and 
 * ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

 

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

 * 
 * Answer
 * 
 * 
*/
// function getConcartenation(nums){
//     return [...nums, ...nums]
// }
function getConcartenation(nums){
    let answer = [2 * nums.length]
    for(let i=0; i < 2*nums.length; i++){
    if(i < nums.length){

        answer[i] = nums[i]
    
    } else {
        answer[i] = nums[i - nums.length]
    }
    }
    console.log(answer);
    
}

nums = [1,3,2,1];
getConcartenation(nums);