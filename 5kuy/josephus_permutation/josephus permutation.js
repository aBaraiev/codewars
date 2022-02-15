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