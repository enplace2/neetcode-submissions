class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 2 objs that contain the letters for each word as keys and counts as vals
        // compare obj lengths 
        // compare obj keys 

        if (s.length !== t.length){
            return false;
        }

        const sLetters = {}
        const tLetters = {}

        for (let i = 0; i < s.length; i ++){
            this.updateLetterCount(s[i], sLetters)
            this.updateLetterCount(t[i], tLetters)
        }

        //compare the two objects
        console.log({sLetters, tLetters})
        for (const [key, value] of Object.entries(sLetters)){
            if(!tLetters[key] || tLetters[key] !== value ){
                return false;
            }
        }

        return true;

        
    }

    updateLetterCount(letter, letterObj){
        if(!letterObj[letter]){
            letterObj[letter] = 0
        }
        letterObj[letter]++
        
    }
}
