// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.
//
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {

    return str.split(' ').map(word => pigWord(word)).join(' ');
}

function pigWord(word) {

    const INDEX_A = 'A'.charCodeAt(0);
    const INDEX_z = 'z'.charCodeAt(0);

    let wordStartIndex, wordEndIndex, wordWithoutPunctuation;

    for (let i = 0; i < word.length; i++) {
        let symbolCode = word.charCodeAt(i);
        if (symbolCode >= INDEX_A && symbolCode <= INDEX_z) {
            wordStartIndex = i;
            break;
        }
    }

    for (let i = word.length; i >= 0; i--) {
        let symbolCode = word.charCodeAt(i);
        if (symbolCode >= INDEX_A && symbolCode <= INDEX_z) {
            wordEndIndex = i;
            break;
        }
    }

    if (wordEndIndex === word.length - 1) {
        wordWithoutPunctuation = word.substr(wordStartIndex, wordEndIndex + 1)
    } else {
        wordWithoutPunctuation = word.substr(wordStartIndex, wordEndIndex - 1)
    }

    if (wordWithoutPunctuation) {
        let pigged = wordWithoutPunctuation.split('');
        pigged.push(pigged.shift());
        return word.replace(wordWithoutPunctuation, pigged.join('') + 'ay');
    }

    return word;
}
