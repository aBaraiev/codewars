// There is a secret string which is unknown to you. Given a collection of random triplets from the string,
// recover the original string.
//
// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before
// the next in the given string. "whi" is a triplet for the string "whatisup".
//
// As a simplification, you may assume that no letter occurs more than once in the secret string.
//
// You can assume nothing about the triplets given to you other than that they are valid triplets and that
// they contain sufficient information to deduce the original string. In particular, this means that the secret
// string will never contain letters that do not occur in one of the triplets given to you.

const recoverSecret = function (triplets) {

    let recoveredSecret = '';
    let nodes = createNodes(triplets);

    while (Object.keys(nodes).length > 0) {
        let firstNode = getFirstNode(nodes);
        removeNode(nodes, firstNode);
        recoveredSecret += firstNode;
    }

    return recoveredSecret;
}

function createNodes(triplets) {

    let nodes = {};

    triplets.forEach(triplet => {

        if (!(triplet[0] in nodes)) {
            nodes[triplet[0]] = {prev: null, next: new Set(triplet[1])}
        } else if (nodes[triplet[0]].next === null) {
            nodes[triplet[0]].next = new Set(triplet[1])
        } else {
            nodes[triplet[0]].next.add(triplet[1])
        }

        if (!(triplet[1] in nodes)) {
            nodes[triplet[1]] = {prev: new Set(triplet[0]), next: new Set(triplet[2])}
        } else {
            if (nodes[triplet[1]].prev === null)
                nodes[triplet[1]].prev = new Set(triplet[0]);
            else
                nodes[triplet[1]].prev.add(triplet[0])
            if (nodes[triplet[1]].next === null)
                nodes[triplet[1]].next = new Set(triplet[2]);
            else
                nodes[triplet[1]].next.add(triplet[2]);
        }

        if (!(triplet[2] in nodes)) {
            nodes[triplet[2]] = {prev: new Set(triplet[1]), next: null}
        } else if (nodes[triplet[2]].prev === null) {
            nodes[triplet[2]].prev = new Set(triplet[1]);
        } else {
            nodes[triplet[2]].prev.add(triplet[1]);
        }

    })

    return nodes;
}

function getFirstNode(nodes) {
    for (let key of Object.keys(nodes)) {
        if (nodes[key].prev === null)
            return key;
    }
}

function removeNode(nodes, n) {

    delete nodes[n];
    for (let key of Object.keys(nodes)) {
        nodes[key].prev.delete(n);
        if (nodes[key].prev.size === 0)
            nodes[key].prev = null;
    }
}

// console.log(recoverSecret([
//     ['t', 'u', 'p'],
//     ['w', 'h', 'i'],
//     ['t', 's', 'u'],
//     ['a', 't', 's'],
//     ['h', 'a', 'p'],
//     ['t', 'i', 's'],
//     ['w', 'h', 's']
// ]))

