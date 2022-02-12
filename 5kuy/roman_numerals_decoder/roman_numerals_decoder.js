function solution(roman) {

    let numbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let decimal = 0;
    let mutatedNumeral = roman.split('').map(e => numbers[e]);

    for (let i = 0; i < mutatedNumeral.length; i++) {
        let current = mutatedNumeral[i];
        let next = mutatedNumeral[i + 1];
        if (current < next) {
            decimal += next - current;
            i = i++;
        } else {
            decimal += current;
        }
    }

    return decimal;
}
