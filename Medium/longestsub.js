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

// abba
a = 0
b = 1

max = 2
i = 2
j = 0
function lengthOfLongestSubstring(s) {
    if (s.length==0) return 0;
    let map = new Map()
    max=0;
    // two pointers i and j, stop when i<s.length
    for (let i=0, j=0; i<s.length; ++i){
        // if map has char, j equals either the greater value between j or map.get+1
        if (map.has(s.charAt(i))){
            j = Math.max(j,map.get(s.charAt(i))+1);
        }
        // sets char at i to i
        map.set(s.charAt(i),i);
        // max = either max or i-j+1
        max = Math.max(max,i-j+1);
    }
    return max;
}