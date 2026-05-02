class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // the key is to take a number, subtract it from target, and see if that number exists in the array. 
        // keep track of visited numbers with map 
        
        const visited = {}

        for (let i = 0; i < nums.length; i ++){
            const num = nums[i]
            const looking = target - num;
            if(visited[target - num]){
                return [visited[looking] -1, i]
            }
            visited[num] = i + 1
        }

        return [0,0]
    }
}
