// Kata Task
// Given a string of letters a, b, n how many different ways can you make the word "banana"
// by crossing out various letters and then reading left-to-right?
// (Use - to indicate a crossed-out letter)
//
// Example
// Input
//
// bbananana
// Output
//
// b-anana--
// b-anan--a
// b-ana--na
// b-an--ana
// b-a--nana
// b---anana
// -banana--
// -banan--a
// -bana--na
// -ban--ana
// -ba--nana
// -b--anana
// Notes
// You must return all possible bananas, but the order does not matter
// The example output above is formatted for readability. Please refer to the example tests for expected format of your result.

var bananas = function (s) {
    let bananas = [];
    let indexes = {b: [], a: [], n: []}

    s.split('').map((letter, index) =>
        letter === 'b' ? indexes.b.push(index) : (letter === 'a' ? indexes.a.push(index) : indexes.n.push(index)));
    if (indexes.b.length < 1 || indexes.a.length < 3 || indexes.n.length < 2) return bananas;

    indexes.a = createTriples(indexes.a);
    indexes.n = createPairs(indexes.n);

    for (let i = 0; i < indexes.b.length; i++) {
        for (let j = 0; j < indexes.a.length; j++) {
            for (let k = 0; k < indexes.n.length; k++) {
                let tmp = s.split('').map(symbol => '-');
                tmp[indexes.b[i]] = 'b';
                for (let a of indexes.a[j]) tmp[a] = 'a';
                for (let n of indexes.n[k]) tmp[n] = 'n'
                if (tmp.map(e => e === '-' ? '' : e).join('') === 'banana') {
                    bananas.push(tmp.join(''));
                }
            }
        }
    }
    return bananas;
}

const createPairs = array => {
    let pairs = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            pairs.push([array[i], array[j]]);
        }
    }
    return pairs;
}

const createTriples = array => {
    let triples = [];
    let pairs = createPairs(array);
    for (let a of array) {
        for (let pair of pairs) {
            if (pair[0] > a) {
                let triple = [a, ...pair];
                triples.push(triple);
            }
        }
    }
    return triples;
}

