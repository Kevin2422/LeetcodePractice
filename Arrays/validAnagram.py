# use hashmap to get count of letters of the first string, then see if those counts match in the second
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        map = {}
        for x in s:
            if x in map:
                map[x] = map[x] + 1
            else:
                map[x] = 1
        for y in t:
            if y in map:
                map[y] = map[y] - 1
                if map[y] < 0:
                    return False
            else:
                return False
        return True