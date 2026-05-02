class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // choose a starting word 
        // loop over letters of that word 
        // check that other words have that letter at that index by looping over the input 
        // push letter to string or return existing string 

        // is there a more clever way to do this? 
        //n * m time where m = length of shortest word 
        

        const word = strs[0]
        let prefix = ""
        for (let i = 0; i < word.length; i++){
            for (const str of strs){
                if (str[i] !== word[i]){
                    return prefix
                }
            }
            prefix += word[i]
        }

        return prefix;
    }
}
