"""
3228. Maximum Number of Operations to Move Ones to the End

Que.:  https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/description/
Soln.: https://leetcode.com/submissions/detail/1828476940/

You are given a binary string s.

You can perform the following operation on the string any number of times:

Choose any index i from the string where i + 1 < s.length such that s[i] == '1' and s[i + 1] == '0'.
Move the character s[i] to the right until it reaches the end of the string or another '1'. For example, for s = "010010", if we choose i = 1, the resulting string will be s = "000110".
Return the maximum number of operations that you can perform.

Example 1:
Input: s = "1001101"
Output: 4

Explanation:
We can perform the following operations:
Choose index i = 0. The resulting string is s = "0011101".
Choose index i = 4. The resulting string is s = "0011011".
Choose index i = 3. The resulting string is s = "0010111".
Choose index i = 2. The resulting string is s = "0001111".

Example 2:
Input: s = "00111"
Output: 0

Constraints:

1 <= s.length <= 105
s[i] is either '0' or '1'.


-----------------------------------------------------------------

## 🧩 Problem Understanding

You’re given a **binary string `s`**, and you can move `'1'` **rightward past consecutive `'0'`s**, until it hits the end or another `'1'`.

The goal is:
👉 Find the **maximum number of operations** you can perform.

Each operation = choosing one `'10'` pair (where `1` comes before `0`) and moving the `'1'` to the right (past the `0`s).

---

### Example walkthrough

```
s = "1001101"
```

We can do:

1. Choose `i = 0` → `"0011101"`
2. Choose `i = 4` → `"0011011"`
3. Choose `i = 3` → `"0010111"`
4. Choose `i = 2` → `"0001111"`

✅ Total = 4 operations

---

## ⚙️ Intuition Behind the Code

The **key observation**:

Each time we hit a `'0'`,
it means **all previous `'1'`s before this `'0'` could be moved past it at least once**.

So every `'0'` contributes `count_one` operations
(where `count_one` = number of `'1'`s seen so far before it).

That’s the logic your code uses 👇

---

## 🧠 Code Breakdown

```python
class Solution:
    def maxOperations(self, s: str) -> int:
        count_one = 0  # number of '1's seen so far
        result = 0     # total operations
        i = 0

        while i < len(s):
            if s[i] == '0':
                # skip continuous zeros
                while i + 1 < len(s) and s[i + 1] == '0':
                    i += 1
                # every '0' group gets moved by all previous '1's
                result += count_one
            else:
                # count '1's
                count_one += 1
            i += 1
        
        return result
```

---

## 🧮 Dry Run

### Input: `"1001101"`

| Step | i | s[i] | count_one | result | Explanation                 |
| ---- | - | ---- | --------- | ------ | --------------------------- |
| 0    | 0 | 1    | 1         | 0      | First 1                     |
| 1    | 1 | 0    | 1         | 1      | One ‘0’, 1 one before → +1  |
| 2    | 0 | 0    | 1         | 1      | skip                        |
| 3    | 1 | 1    | 2         | 1      | another 1                   |
| 4    | 1 | 1    | 3         | 1      | another 1                   |
| 5    | 0 | 0    | 3         | 4      | one ‘0’, 3 ones before → +3 |
| 6    | 1 | 1    | 4         | 4      | done                        |

✅ Output = 4 ✅

---

## 🧪 Test Cases

```python
solver = Solution()

print(solver.maxOperations("1001101"))  # ✅ 4
print(solver.maxOperations("00111"))    # ✅ 0
print(solver.maxOperations("1010"))     # ✅ 2
print(solver.maxOperations("0000"))     # ✅ 0
print(solver.maxOperations("1111"))     # ✅ 0
print(solver.maxOperations("1100100"))  # ✅ 5
```

---

## 🧠 Time & Space Complexity

* ⏱ **O(n)** — single pass
* 💾 **O(1)** — constant space

---

## ✅ Summary

| Concept              | Explanation                                                        |
| -------------------- | ------------------------------------------------------------------ |
| **Key Insight**      | Every ‘0’ contributes operations equal to number of ‘1’s before it |
| **Algorithm Type**   | Greedy counting                                                    |
| **Time Complexity**  | O(n)                                                               |
| **Space Complexity** | O(1)                                                               |

-----------------------------------------------------------------

"""

class Solution:
    def maxOperations(self, s: str) -> int:
        count_one = 0  # number of '1's seen so far
        result = 0     # total operations
        i = 0

        while i < len(s):
            if s[i] == '0':
                # skip continuous zeros
                while i + 1 < len(s) and s[i + 1] == '0':
                    i += 1
                # every '0' group gets moved by all previous '1's
                result += count_one
            else:
                # count '1's
                count_one += 1
            i += 1
        
        return result


solver = Solution()

print(solver.maxOperations("1001101"))  # ✅ 4
print(solver.maxOperations("00111"))    # ✅ 0
print(solver.maxOperations("1010"))     # ✅ 2
print(solver.maxOperations("0000"))     # ✅ 0
print(solver.maxOperations("1111"))     # ✅ 0
print(solver.maxOperations("1100100"))  # ✅ 5