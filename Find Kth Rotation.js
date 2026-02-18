/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    findKRotation(nums) {
        // Code Here
        let l=0
        let h=(nums.length)-1
        let prem=nums[0]
        let ans=0
        while(h>=l){
            let mid=Math.floor((l+h)/2) 
            if (nums[mid]<prem){
                prem=nums[mid]
                h=mid-1
                ans=mid
            }
            else{
                l=mid+1
            }
        }
        return ans
    }
}
