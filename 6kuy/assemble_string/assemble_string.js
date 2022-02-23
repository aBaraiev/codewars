// Task
// In this task, you need to restore a string from a list of its copies.
//
// You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately,
// they were corrupted which means some of the characters were replaced with asterisks ("*").
//
// You have to restore the original string based on non-corrupted information you have. If in some cases it is not
// possible to determine what the original character was, use "#" character as a special marker for that.
//
//     Examples:
// input = [
//     "a*cde",
//     "*bcde",
//     "abc*e"
// ]
// result = "abcde"
//
//
// input = [
//     "a*c**",
//     "**cd*",
//     "a*cd*"
// ]
// result = "a#cd#"

function assembleString(array) {

    let allSymbols = []

    for (let word of array) {
        let symbols = [...word];
        for (let i = 0; i < symbols.length; i++) {
            let symbol = symbols[i];
            if (symbol !== '*') {
                allSymbols[i] = symbol;
            } else if (!allSymbols[i]) {
                allSymbols[i] = '#';
            }
        }
    }
    return allSymbols.join('');
}