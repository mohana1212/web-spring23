function divide(a, b) {
        return a / b;
}
const val1 = divide(20, 4);
console.log(val1);

function add(a, b) {
        return a + b;
}
const val2 = add(20, 4);
console.log(val2);

function convert(Fahrenheit) {
        return (Fahrenheit - 32) * (5 / 9);
}
const val3 = convert(100);
console.log(val3 + "  C");

function divisibleBy55(val) {
        //let a = b / 55;
        if (val % 55 == 0) {
                //let a = 0;

                return true;
        } else {
                return false;
        }
        // return a;
}
console.log(divisibleBy55(164));

function checklenght(val) {
        return val.lenght;
}
let A = "string";
B = checklenght(A);

console.log(B);

function concat(val1, val2) {
        return val1 + " " + val2;
}
let a = "cat";
let b = "dog";
c = concat(a, b);
console.log(c);
