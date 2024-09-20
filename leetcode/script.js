/***
 * 14. Longest Common Prefix
Easy
Topics
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
 * 
 * 
 * 
 * Algorithm 1
 * Intuition
 *Create longest common prefix betweeen 2 words.
 Input Validation:

Check if the input strs is a list and if it's empty, return an empty string. This is because at least one string is required to find the common prefix.
 * * */

longestcommonprefix = (strs) => {
    let pref = strs[0]
    let prefLen = pref.length

    for(let i = 1; i < strs.length; i++){
        let s = strs[i]
        while(pref !== s.substring(0, prefLen)){
            prefLen--;
            if(prefLen === 0){
                // console.log("");
                return "";
            }

        pref = pref.substring(0, prefLen)
        }
    }
    // console.log(pref);
    return pref
}

strs = ["flower","flow","flight"]

console.log(longestcommonprefix(strs))
