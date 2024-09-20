addTwoNumber =(l1, l2) => {
    let dummy = new ListNode();
    let res = dummy
    let total = 0, carry = 0

    while(l1 || l2 || carry){
        total = carry

        if(l1){
            total += l1.val
            l1 = l1.next 
        }

        if(l2){
            total += l2.val
            l2 = l2.next
        }

       let num = total % 10
        carry = Math.floor(total / 10)
        dummy.next = new ListNode(num)
        dummy = dummy.next
    }

    return res.next
}





/********
 * Algorithm
 * 
 * We will implement simple algorithm and create a new LinkedList.

 *First of all, we create dummy node with value 0(you can put any number instead of 0).
 * Second We copy dummy pointer and create result pointer. Basically, we calculate addition with values from l1 and l2 at the same index.
 */





/****
 * 2. Add Two Numbers
Solved
Medium
Topics
Companies
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 * 
 * 
 * 
 */