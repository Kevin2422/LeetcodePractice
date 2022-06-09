var longestPalindrome = function (s) {
    let map = {}
    let longest = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            map[s[i]] += 1
        } else {
            map[s[i]] = 1
        }
    }

    for (const letters in map) {
        if (map[letters] % 2 == 0) {
            longest += map[letters]
        } else {
            longest += map[letters] - 1
        }
    }

    if (longest < s.length) {
        longest += 1
    }
    return longest

};