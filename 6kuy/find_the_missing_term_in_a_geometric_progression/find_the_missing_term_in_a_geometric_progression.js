// Based on: Find the missing term in an arithmetic progression
//
// A Geometric Progression is a progression of numbers with a constant ratio between each number and the one before.
//
// You will be given an array arr that contains the entirety of a Geometric Progression, except for 1 term,
// your task is to return that term.
//
// For example:
//
// findMissing([2,4,8,32]) returns 16
// You may assume the input is well-formed - all arrays passed in will have a minimum of 3 terms,
// the missing term will never be the first/last element and the common ratio r will never be 0 or 1. However,
// for all language versions except the JS version, you may not assume that r will always be a positive integer
// strictly greater than 1. You may also not assume that all terms in the geometric progression will be positive
// integers so you may have to take minor floating point errors into account. The test cases will also allow for
// potential minor floating point errors except in the JS version.

function findMissing(arr) {
    let q = Math.pow(arr[arr.length - 1] / arr[0], 1 / arr.length)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] / arr[i - 1] !== q) return arr[i] / q;
    }
}