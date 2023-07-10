let arrA = [5];
let arrB = [5];
let arrC = arrA;
let arrD = arrB;

// What will arrA look like up until this point? [5]
// What will arrB look like up until this point? [5]
// What will arrC look like up until this point? [5]
// What will arrD look like up until this point? [5]

// write what each console.log() will print after the "//"
console.log(arrA === arrC); // true
arrA[0] = 100;
console.log(arrA); // [100]
console.log(arrC); // [100]
console.log(arrA === arrC); // true

// write what each console.log() will print after the "//"
arrC[1] = "hello";
console.log(arrA); // [100, Helo]
console.log(arrC); // [100,hello]
console.log(arrA === arrC); // true

// write what each console.log() will print after the "//"
console.log(arrB === arrD);
arrB = 999; //
console.log(arrD); // [5]
console.log(arrB === arrD); // false

// write what each console.log() will print after the "//"
console.log(arrB === arrD); //false
arrB = [5];
console.log(arrB); //[5]
console.log(arrD); //[5] //old array
console.log(arrB === arrD); //false

arrD[1] = 1000; //[5,1000]
console.log(arrB); // [5]
console.log(arrD); // [5,1000]
console.log(arrB === arrD); // false

arrD = arrB; //
arrD[1] = 777; //
console.log(arrB); // [5,777]
console.log(arrD); // [5,777]
console.log(arrB === arrD); // true
