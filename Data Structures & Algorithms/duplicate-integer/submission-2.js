class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let uniques = []

        for(let i=0;i<nums.length;i++){
            if(!uniques.includes(nums[i])){
                uniques.push(nums[i])
            }   else {
                return true
            }
        }
    return false
    }
}
