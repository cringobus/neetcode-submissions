class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */



    groupAnagrams(strs) {


        let blueprint = []
        let output = []

        for(let i=0;i<strs.length;i++){
            const letersArr = strs[i].split("")
            const sortedLeters = letersArr.sort()
            const key = sortedLeters.join("")
            const index = blueprint.indexOf(key)
            if(index === -1){
                blueprint.push(key)
                output.push([strs[i]])
            } else {
                output[index].push(strs[i])
            }
        }
    return output
    }
}
