class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        for(let i=0;i<nums.length;i++){ //Forming a hashmap
            if(map.has(nums[i])){
                const temp = map.get(nums[i])
                map.set(nums[i], temp + 1)
            }   else {
                map.set(nums[i], 1)
            }
        }

        let result = []

        for(let i=0;i<k;i++){
            let biggest = 0
            for(let j=0;j<nums.length;j++){
                
                let count = map.get(nums[j])
                let biggestCount = 0
                if (map.has(biggest)){
                    biggestCount = map.get(biggest)
                }
                

                if(count > biggestCount){
                    biggest = nums[j]
                }   
                if (j === nums.length -1){
                    map.set(biggest, 0)
                }

            }
            result.push(biggest)
            
        }
    return result
    }
}
