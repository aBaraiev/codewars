// You will be given an array of numbers.
// You have to sort the odd numbers in ascending order
// whileleaving the even numbers at their original positions.
//
//     Examples
//     [7, 1]  =>  [1, 7]
//     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let evens = {}
        , oddIndexes = []
        , sorted = [];

    array.map((e, i) => {
        if (e % 2 === 0) evens[i] = e;
    })
    let odds = array.filter((e, i) => {
        if (e % 2 !== 0) {
            oddIndexes.push(i);
            return 1;
        }
        return 0;
    }).sort((a, b) => a - b);

    for (let i of Object.keys(evens)) {
        sorted[i] = evens[i];
    }

    for (let oddIndex of oddIndexes) {
        sorted[oddIndex] = odds.shift();
    }

    return sorted;
}