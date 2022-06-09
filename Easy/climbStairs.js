// time limit exceeded
// couldn't memoize this because i coded wrong, didn't need to calculate sum 
var climbStairs = function (n, sum = 0) {

    if (sum == n) {

        return 1
    }
    else if (sum > n) {
        return 0
    }

    let l = climbStairs(n, sum + 1)

    let r = climbStairs(n, sum + 2)


    return l + r

};

//  memoization

var climbStairs = function (n, memo = { 1: 1, 2: 2 }) {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};