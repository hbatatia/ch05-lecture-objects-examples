function add3(x, y, z) {
    return x + y + z;
}

function runAdd() {
    const sum = add3;
    let n1 = getRandomInt(100);
    let n2 = getRandomInt(100);
    let n3 = getRandomInt(100);

    let result = sum(n1, n2, n3);
    window.alert(n1.toString() + '+' + n2.toString() + '+' + n3.toString() + "=" + result);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function evaluate(f, a, b, c) {
    return f(a, b, c);
}

function runEvaluate() {
    let n1 = getRandomInt(100);
    let n2 = getRandomInt(100);
    let n3 = getRandomInt(100);

    var s = evaluate(add3, n1, n2, n3);

    window.alert(n1.toString() + '+' + n2.toString() + '+' + n3.toString() + "=" + s);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function unkown(x, y) {
    return "Invalid operator";
}

function find(c) {
    if (c === '+') return add;
    if (c === '*') return mul;
    return unkown;
}

function runFind() {
    var operator = window.prompt("Enter an operator (+, -, /)? ", "+")
    const operation = find(operator);
    let n1 = getRandomInt(100);
    let n2 = getRandomInt(100);
    var s = operation(n1, n2);
    window.alert(n1.toString() + operator + n2.toString() + "=" + s);
}