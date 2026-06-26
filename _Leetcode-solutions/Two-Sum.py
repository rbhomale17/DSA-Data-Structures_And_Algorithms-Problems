1class Solution:
2    def twoSum(self, nums: List[int], target: int) -> List[int]:
3        seen = {}
4
5        for idx, num in enumerate(nums):
6            remaining = target - num
7
8            if remaining in seen:
9                return [seen[remaining], idx]
10            
11            seen[num] = idx
12        
13
14
15# class Solution:
16#     def twoSum(self, nums: List[int], target: int) -> List[int]:
17#         tuple_nums = [(num, idx) for idx, num in enumerate(nums)]
18
19#         print(tuple_nums)
20
21#         sorted_nums = sorted(tuple_nums)
22#         print(sorted_nums)
23
24#         i = 0
25#         j = len(nums) - 1
26
27#         while i < j:
28#             sum = sorted_nums[i][0] + sorted_nums[j][0]
29#             if sum == target:
30#                 return [sorted_nums[i][1], sorted_nums[j][1]]
31#             elif sum > target:
32#                 j -= 1
33#             else:
34#                 i += 1