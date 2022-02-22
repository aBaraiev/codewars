// Create a RomanNumerals class that can convert a roman numeral to and from an integer value.
//     It should follow the API demonstrated in the examples below. Multiple roman numeral
// values will be tested for each helper method.
//
// Modern Roman numerals are written by expressing each digit separately starting with the left
// most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered:
// 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
//
// Input range : 1 <= n < 4000
//
// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
//
// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

class RomanNumerals {

    static toRoman(decimal) {
        let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        let hunds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
        let thous = ["", "M", "MM", "MMM", "MMMM"];

        return thous[Math.floor(decimal / 1_000)]
            + hunds[Math.floor(decimal / 100) % 10]
            + tens[Math.floor(decimal / 10) % 10]
            + ones[decimal % 10];
    };

    static fromRoman(roman) {

        let romanNumbers = {
            I: 1,
            IV: 4,
            V: 5,
            IX: 9,
            X: 10,
            XL: 40,
            L: 50,
            C: 100,
            XC: 90,
            CD: 400,
            D: 500,
            CM: 900,
            M: 1000
        }

        return roman.match(/IV|IX|XL|XC|CD|CM|\w/g)
            .map(e => romanNumbers[e])
            .reduce((a, b) => a + b);
    }
}