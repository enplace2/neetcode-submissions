class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const wordHashes = {}

        for (const str of strs){
            const hash = this.getHash(str)
            if(!wordHashes[hash]){
                wordHashes[hash] = []
            }
            wordHashes[hash].push(str)
        }

        // loop over obj and return new array 
        const result = []
        for (const groupedAnagrams of Object.values(wordHashes)){
            result.push(groupedAnagrams)
        }

        return result;

    }
    getHash(word){
        let hash = new Array(26).fill(0)
        for (const letter of word){
            hash[letter.toLowerCase().charCodeAt(0)-97]++
        }
        return hash
    }
}
