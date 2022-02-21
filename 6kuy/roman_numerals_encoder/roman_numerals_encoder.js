// Create a function taking a positive integer as its parameter and returning a string containing the
// Roman Numeral representation of that integer.
//
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit
// and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC;
// resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol
// in descending order: MDCLXVI.

// Example:
//
//     solution(1000); // should return 'M'
// Help:
//
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
//
// Remember that there can't be more than 3 identical symbols in a row.
//
// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

function solution(number) {
    let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let hunds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let thous = ["", "M", "MM", "MMM", "MMMM"];

    return thous[Math.floor(number / 1_000)]
        + hunds[Math.floor(number / 100) % 10]
        + tens[Math.floor(number / 10) % 10]
        + ones[number % 10];
}