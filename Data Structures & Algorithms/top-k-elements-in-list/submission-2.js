class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};

        for (const num of nums) {
            if (!counts[num]) {
                counts[num] = 1;
            } else {
                counts[num]++;
            }
        }

        const groupedVals = new Array(nums.length + 1);

        for (const [num, count] of Object.entries(counts)) {
            if (!Array.isArray(groupedVals[count])) {
                groupedVals[count] = [];
            }
            groupedVals[count].push(num);
        }

        const result = [];
        for (let i = groupedVals.length - 1; i >= 0; i--) {
            const groupedNums = groupedVals[i];
            if (!Array.isArray(groupedVals[i])) {
                continue;
            }
            for (const num of groupedNums) {
                result.push(num);
            }
            if (result.length === k) {
                return result;
            }
        }

        return result;
    }
}
