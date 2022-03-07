// Create a function that takes a positive integer and returns the
// next bigger number that can be formed by rearranging its digits. For example:
//
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
//
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

function nextBigger(n) {

    let digits = n.toString().split('')

    let i = digits.length - 1;
    while (i > 0 && digits[i - 1] >= digits[i])
        i--;
    if (i <= 0)
        return -1;

    let j = digits.length - 1;
    while (digits[j] <= digits[i - 1])
        j--;

    let tmp = digits[i - 1];
    digits[i - 1] = digits[j];
    digits[j] = tmp;

    j = digits.length - 1;
    while (i < j) {
        tmp = digits[i];
        digits[i] = digits[j];
        digits[j] = tmp;
        i++;
        j--;
    }
    return +digits.join('');

}