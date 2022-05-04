// Jack's teacher gave him a ton of equations for homework. The thing is they are all kind of same so they are boring.
//
// So help him by making a equation solving function that will return the value of x.
//
//     Test Cases will be like this:
//
// # INPUT            # RETURN
// 'x + 1 = 9 - 2'    # 6
// '- 10 = x'         # -10
// 'x - 2 + 3 = 2'    # 1
// '- x = - 1'        # 1
// All test cases are valid.
//     Every +, - and numbers will be separated by space.
//     There will be only one x either on the left or right.
//     x can have a - mark before it.
//     returned object will be a integer.

const valueOfX = (eq) => {

    let eqSides = eq.split('=');
    let leftSum = eval(eqSides[0].replace('x', '0'));
    let rightSum = eval(eqSides[1].replace('x', '0'));
    let xPosition = eq.indexOf('x');

    return (xPosition === 0 || eq[xPosition - 2] === '+' || eq[xPosition - 2] === '=')
        ?
        eqSides[0].includes('x') ? rightSum - leftSum : leftSum - rightSum
        :
        eqSides[0].includes('x') ? leftSum - rightSum : rightSum - leftSum;
}
