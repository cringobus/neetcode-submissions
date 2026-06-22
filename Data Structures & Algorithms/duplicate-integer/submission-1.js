class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false

        for(let i=0;i<nums.length;i++){
            for(let j=0;j<nums.length;j++){
                if(i != j && nums[i] === nums[j]){
                    result = true
                }
            }
        }
    return result
    }
}
