function validParentheses(parens) {

    let stack = [];
    for (let p of parens) {
        if (isOppositeParens(p, stack[stack.length - 1])) stack.pop();
        else stack.unshift(p);
    }
    return stack.length === 0;
}

function isOppositeParens(p1, p2) {

    return p1 === ')' && p2 === '('
}
