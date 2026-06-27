class Solution {
    /**
     * @param {number[]}
     * @return {number[][]}
     */
    threeSum(nums) {
        function bubbleSort(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }

        const sortedArray = bubbleSort(nums);
        const result = [];

        for (let i = 0;i<sortedArray.length;i++){
            if (sortedArray[i] === sortedArray[i-1]) continue
            let diff = 0 - sortedArray[i]
            let l = i+1
            let r = sortedArray.length - 1

            while(l<r){
                if (sortedArray[l] + sortedArray[r] > diff) {
                    r--
                }   else if (sortedArray[l] + sortedArray[r] < diff) {
                    l++
                }   else if (sortedArray[l] + sortedArray[r] === diff){
                    result.push([sortedArray[i], sortedArray[l], sortedArray[r]])
                        l++;
                        while (l < r && sortedArray[l] === sortedArray[l - 1]) l++;
                }
            }
        }

        return result;
    }
}