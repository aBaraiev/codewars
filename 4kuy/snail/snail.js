// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]
// snail(array) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]
// snail(array) #=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2 - d array in a clockwise snailshell pattern.
// NOTE 2: The 0x0(empty matrix) is represented as en empty array inside an array[[]].

// array = [[1, 2, 3],
//          [8, 9, 4],
//          [7, 6, 5]]
// snail(array) #=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

snail = function (array) {

    if (array[0].length === 0) return [];

    let k = 0
        , p = array.length - 1
        , indexes = []
        , snailedArray = [];

    while (k <= p) {
        for (let i = k; i <= p - 1; i++) {
            indexes.push({row: k, col: i});
        }
        for (let i = k; i <= p - 1; i++) {
            indexes.push({row: i, col: p});
        }
        for (let i = p; i >= k + 1; i--) {
            indexes.push({row: p, col: i});
        }
        for (let i = p; i >= k + 1; i--) {
            indexes.push({row: i, col: k});
        }
        k++;
        p--;
    }

    if (array.length % 2 === 1) {
        let midElementIndex = Math.floor(array.length / 2);
        indexes.push({row: midElementIndex, col: midElementIndex})
    }

    for (let index of indexes) {
        snailedArray.push(array[index.row][index.col]);
    }

    return snailedArray;
}
