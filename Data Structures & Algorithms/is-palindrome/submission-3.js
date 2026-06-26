class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let Arr = s.split(" ")
        let inOneLine = Arr.join("")
        inOneLine = inOneLine.replace(/[!?.,:@#"'"]/g, "").toLowerCase();
        
        
        let l = 0
        let r = inOneLine.length - 1
        while (l<=r){
            if(inOneLine[l] === inOneLine[r]){
                l++
                r--
            }   else {
                return false
            }
        }
        return true
    }
}
