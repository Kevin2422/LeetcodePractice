class Solution:
    def construct(self, grid: List[List[int]]) -> 'Node':
        isLeaf = True
        if grid[0][0] == 0:
            val = False
        else:
            val = True
            
        for x in range(len(grid[0])):
            for y in range(len(grid[0])):
                if grid[x][y] != grid[0][0]:
                    isLeaf = False
        if isLeaf:
            return Node(val, isLeaf, None, None, None, None)
        else:
            n = len(grid[0])
            return Node('*',
				False,
				self.construct([row[:n//2] for row in grid[:n//2]]),
				self.construct([row[n//2:] for row in grid[:n//2]]),
				self.construct([row[:n//2] for row in grid[n//2:]]),
				self.construct([row[n//2:] for row in grid[n//2:]]))