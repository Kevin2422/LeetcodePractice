// my solution (slow runtime/memory)

// var lengthOfLongestSubstring = function(s) {
//     let substring = ""
//     let tempstring = ""
//     let uniqueChars = {}
//     let index = 0
//     let subindex 
//     while(index < s.length){
//         for( subindex = index; subindex<s.length; i++){
//             if(s[i] in uniqueChars){
//                 break
//             }else{
//                 uniqueChars[s[i]] = true
//                 tempstring += s[i]
                
//             }
//         }

//         if(substring.length < tempstring.length){
//             substring =tempstring
//         }

//         uniqueChars = {}
//         tempstring = ""
//         index++
//     }
//     return substring.length
// };

console.log(lengthOfLongestSubstring("abcabcbb"))


function lengthOfLongestSubstring(s) {
    if (s.length==0) return 0;
    let map = new Map()
    max=0;
    // two pointers i and j, stop when i<s.length
    for (let i=0, j=0; i<s.length; ++i){
        // if you find a duplicate, set j to the index right after the previous instance of the duplicate only if that index is ahead of where j is currently at (since you don't want j to go back )
        // for ex abba - when the second b is found j = 2 since the previous b is at 1, but when the second a is found, j would = 1, which would make j go back to 1 and mess up the substring length 
        if (map.has(s.charAt(i))){
            j = Math.max(j,map.get(s.charAt(i))+1);
        }
        // sets char at i as key and i as value - keeps track of most recent non duplicate characters
        map.set(s.charAt(i),i);
        // max = either max (a previous substring length that was greater) or i-j+1 (the current substring length)
        max = Math.max(max,i-j+1);
    }
    return max;
}