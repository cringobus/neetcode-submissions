class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArr = s.split('')

        if(s.length>t.length){
            return false
        }

        for(let i=0;i<t.length;i++){
            let includes = sArr.indexOf(t[i])
            if(includes != -1){
                sArr.splice(includes, 1)
            }   else {
                return false
            }
        }
        return true
    }
}
