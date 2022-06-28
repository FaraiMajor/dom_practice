class Solution:
    def reverse(self, x: int) -> int:
        l = list(str(x)[::-1])

        if l[-1] == '-':
            l.pop()
            l.insert(0, '-')
        range1 = [-2**31, 2**31-1]
        s = int(''.join(l))
        if (s < range1[0] or s > range1[1]):
            return 0
        return s

    print(reverse(1234, 1234))
