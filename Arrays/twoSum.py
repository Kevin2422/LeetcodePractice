class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hash = {}
        for x in range(len(nums)):
            diff = target - nums[x]
            
            if diff in hash:
                return [hash[diff], x]
            hash[nums[x]] = x