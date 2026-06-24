class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length != t.length) return false

        let sMap = new Map()
        let tMap = new Map()

        for(let i=0;i<s.length;i++){    //Making 2 hashmaps
            if(!sMap.has(s[i])){    // For s
                sMap.set(s[i], 1)
            }   else {
                const letter = sMap.get(s[i])
                sMap.set(s[i], letter+1)
            }

            if(!tMap.has(t[i])){    // For t
                tMap.set(t[i], 1)
            }   else {
                const letter = tMap.get(t[i])
                tMap.set(t[i], letter+1)
            }
        }
        for(let i=0;i<s.length;i++){
            if(sMap.get(s[i]) != tMap.get(s[i])){
                return false
            }
        }
        return true
    }
}
