// This problem takes its name by arguably the most important event in the life of the ancient historian Josephus:
// according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.
//
// Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist:
// they formed a circle and proceeded to kill one man every three, until one last man was left
// (and that it was supposed to kill himself to end the act).
//
// Well, Josephus and another man were the last two and, as we now know every detail of the story,
// you may have correctly guessed that they didn't exactly follow through the original idea.
//
// You are now to create a function that returns a Josephus permutation, taking as parameters the initial
// array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.
//
// Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.
//
// For example, with n=7 and k=3 josephus(7,3) should act this way.
//
//     [1,2,3,4,5,6,7] - initial sequence
//     [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
//     [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
//     [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
//     [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
//     [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
//     [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
//     [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]

function josephus(items, k) {

    let result = []
    let index = 0;

    while (items.length > 0) {
        index = (index + k - 1) % items.length;
        result = result.concat(items.splice(index, 1));
    }
    return result;
}


// BAD SOLUTION BELOW

// function josephus(items, k) {
//
//     let isBooleanArray = false;
//
//     if (items.includes(true) || items.includes(false)) {
//         let countTrue = 0, countFalse = 0;
//         items = items.map(e => {
//             return e ? countTrue++ + 'true' : countFalse++ + 'false';
//         })
//         isBooleanArray = true;
//     }
//
//     let permutation = [];
//     let loop = [...items];
//     let position = k;
//
//     while (items.length > 0) {
//
//         if (loop.length < position) {
//             loop = loop.concat(items);
//             continue;
//         }
//
//         let killed = loop[position - 1];
//         permutation.push(killed);
//         items = items.filter(e => e !== killed);
//         position += k;
//     }
//
//     if (isBooleanArray) {
//         return (permutation.map(e => e.includes('true')))
//     }
//
//     return permutation;
// }