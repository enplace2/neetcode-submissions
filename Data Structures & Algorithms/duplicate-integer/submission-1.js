class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const vals = {}
        for (const num of nums) {
            if(vals[num]){
                return true;
            }
            vals[num] = true
        }
        return false;
    }
}
