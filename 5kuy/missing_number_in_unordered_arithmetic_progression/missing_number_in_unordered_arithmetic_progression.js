// If you have not ever heard the term Arithmetic Progression, refer to:
// http://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression/python
//
// And here is an unordered version. Try if you can survive lists of MASSIVE numbers
// (which means time limit should be considered). :D
//
// Note: Don't be afraid that the minimum or the maximum element in the list is missing,
// e.g. [4, 6, 3, 5, 2] is missing 1 or 7, but this case is excluded from the kata.
//
// Example:
//
// find([3, 9, 1, 11, 13, 5]) # => 7

function find(seq) {
    let sum = 0, a0 = seq[0], aN = seq[0];
    for (let element of seq) {
        if (element < a0) a0 = element;
        if (element > aN) aN = element;
        sum += element;
    }
    return 0.5 * (a0 + aN) * (seq.length + 1) - sum;
}