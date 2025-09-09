# Given an array a = [4, 6, 23, 10, 1, 3, 20, 3] (or a = [1, 2, 3, 4]),

# Find all subsets whose sum equals the largest element in the array.

# Then, modify the solution to return only unique subsets.

a = [4, 6, 23, 10, 1, 3, 20, 3]
target = max(a)
a.remove(target)



def find(arr, target):
    # write your solution
    arr.sort()
    print(arr)
    res = set()
    def backtrack(idx, current, current_sum):
        # print(idx, current, current_sum)
        if current and current_sum == target:
            res.add(tuple(current))
        
        for i in range(idx, len(arr)):
            current.append(arr[i])
            current_sum+=arr[i]
            if not current_sum > target:
                backtrack(i+1, current, current_sum)
            removed = current.pop()
            current_sum -= removed

    backtrack(0, [], 0)
    result = [list(tup) for tup in res]
    
    print(result)

print(find(a, target))

=== Code Execution Started ===
# [1, 3, 3, 4, 6, 10, 20]
# [[3, 4, 6, 10], [3, 20], [1, 3, 3, 6, 10]]
# None
=== Code Execution Successful ===

# {}
# {1}
# {2}
# {3}
# {1, 2}
# {1, 3}
# {2, 3}
# {1, 2, 3}














