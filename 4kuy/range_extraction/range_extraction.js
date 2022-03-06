// A format for expressing an ordered list of integers is to use a comma separated list of either
//
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
// The range includes all integers in the interval including both endpoints. It is not considered
// a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns
// a correctly formatted string in the range format.
//
// Example:
//
// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list) {

    if (list.length === 1)
        return list[0].toString();

    let formatted = '';
    let start = list[0];
    let diff = 1;

    for (let i = 1; i < list.length; i++) {
        let tmp = list[i];
        if (i === list.length - 1) {
            if (tmp - start === diff) {
                if (diff === 1)
                    formatted += `${start},${tmp}`;
                else
                    formatted += `${start}-${tmp}`;
            } else {
                if (diff === 1)
                    formatted += `${list[i - 1]},${tmp}`;
                else if (diff === 2)
                    formatted += `${start},${list[i - 1]},${tmp}`;
                else
                    formatted += `${start}-${list[i - 1]},${tmp}`;
            }
        } else if (tmp - start !== diff) {
            if (diff === 1)
                formatted += `${start},`;
            else if (diff === 2)
                formatted += `${start},${list[i - 1]},`;
            else
                formatted += `${start}-${list[i - 1]},`;
            diff = 1;
            start = tmp;
        } else {
            diff++;
        }
    }

    return formatted;
}
