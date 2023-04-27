// Arrays: index/ ordering of elements in arrays matter
// create an array
const arrA = [];
// update an array
arrA[1] = 999; // assigning a value to a certain index of an array

const lengthAfterOnePush = arrA.push(1000, 1001); // push appends (add only in this order) the item to the end
console.log(lengthAfterOnePush);

const lengthAfterTwoPush = arrA.push(1002, 1003, 1004); // push appends (add) the item to the end
console.log(lengthAfterTwoPush);

const poppedValue = arrA.pop(); // removes item from the end of array and returns it

console.log("poppedValue", poppedValue);

console.log(arrA);

// length property vs method
console.log("array length", arrA.length); // array length is not a function/method, so we do not invoke with parenthesis ()

// read from an array
console.log("item at 5th index", arrA[5]);

// delete items from array
// use Array.shift() and Array.pop()

// parameters and arguments
function funcA(parameter) {} // parameters are the dependencies your function takes in as inputs, parameters are used in function def.
funcA("argument"); // arguments are values that gets passed into the function when you call it, arguments gets used when you invoke/call the function
15;

arrD[1] = 777; // arrB[1] = 777
console.log(arrB); // [5, 777] 'aaa000', [5, 777] 'aaa000', [5, 777] 'aaa000'
console.log(arrD); // [5, 777] 'aaa000', [5, 777] 'aaa000', [5, 777] 'aaa000'
console.log(arrB === arrD); // 'aaa000' === 'aaa000' => true , true , true

// review
// hoisting
// someFunction()
// var someFunction = function () {}

// copy by value? compare by value?
let a = 100;
let b = a;
console.log(a === b); // true

// copy by reference and compare by reference?
let arrX = [];
let arrZ = arrX;
console.log(arrX === arrZ); // true
