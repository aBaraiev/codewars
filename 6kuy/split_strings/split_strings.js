// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number
// of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

let solution = (str) => str === '' ? [] : str.length % 2 === 0 ? str.match(/../g) : [...str.match(/../g), str.slice(-1) + '_']
