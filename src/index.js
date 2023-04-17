function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a/b
    },
    multiply: function (a, b) {
        return a*b
    }
}

function ceasarCipher(str, shift) {
    const charCodes = [];
    for (let i=0; i<str.length;i++) {
        const char = str[i];
        // turn each character into their respective code
        const code = str.charCodeAt(i)
        // check if the characters are alphabets (case-insensitive)
        if (char.match(/[a-z]/i)) {
            if (code >= 65 && code <=90) {
                // add shift factor to the char code and push it into charCode array
                // the formula is to wraps z from a (capital letters)
                charCodes.push((code - 65 + shift) % 26 + 65)
            }
            else if (code >= 97 && code <=122)
            // the formula is to wraps z from a (non-capital letters)
                charCodes.push((code - 97 + shift) % 26 + 97)
        }
        else {
            // push the character without any modification to its char code
            charCodes.push(code)
        }
    }
    // convert char codes back to characters in charCodes array, then make it into a string
    return String.fromCharCode(...charCodes)
}

function analyzeArray(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum/arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {average, min, max, length}
}

module.exports = { capitalize, reverseString, calculator, ceasarCipher, analyzeArray }