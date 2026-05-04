class Solution {
    constructor(){
        this.delimiter = "%"
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encoded = [];
        for (const str of strs){
            encoded.push(`${str.length}%${str}`)
        }
        return encoded.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = []
        let pointer = 0;
        while (pointer < str.length){
            const [chunk, nextChunk] = this.extractChunk(str.slice(pointer, str.length))
            decoded.push(chunk)
            pointer += nextChunk
        }
        return decoded;
    }
    extractChunk(str){
        const delimiterIndex = str.indexOf(this.delimiter)
        const chunkLength = parseInt(str.slice(0,delimiterIndex))
        const chunkStart = delimiterIndex + 1
        const chunkEnd = chunkStart + chunkLength
        return [str.slice(chunkStart, chunkEnd), chunkEnd]

    }
}
