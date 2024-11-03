const palindromes = function () {
    let word = prompt("Enter a word to check if it's a palindrome");
    word = word.toLowerCase().match(/[a-z0-9]/g).join("");
    let reversedWord = word.split("").reverse().join("");

    return word === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
