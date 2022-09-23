# just use a hashmap to store previous values, run through the list and check the hashmap to see if a previous  
class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        map = {}
        for x in nums:
            if x in map:
                return True
            map[x] = True
        return False


