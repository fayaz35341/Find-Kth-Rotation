class Solution:
    def findKRotation(self, nums):
        # code here
        l=0
        h=len(nums)-1
        prem=nums[0]
        ans=0
        while(h>=l):
            mid=(l+h)//2 
            if nums[mid]<prem:
                prem=nums[mid]
                h=mid-1
                ans=mid
            else:
                l=mid+1
        return ans
        
