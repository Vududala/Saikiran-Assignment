function composedValue(f1, f2, value) {
    return f1(f2(value));
}
function square(x) {
    return x * x;
}
function double(x) {
    return x * 2;
}
console.log(composedValue(square, double, 2));