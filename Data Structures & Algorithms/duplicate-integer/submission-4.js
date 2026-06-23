class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let uniques = new Map()

        for(let i=0;i<nums.length;i++){
            let exists = uniques.has(nums[i])
            if(!exists){
                uniques.set(nums[i],i)
            }   else {
                return true
            }
        }
    return false
    }
}
