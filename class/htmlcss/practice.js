// function generateFib(n) {
//         // recursive
//         if (n === 0) {
//                 return 0;
//         } else if (n === 1) {
//                 return 1;
//         } else {
//                 return generateFib(n - 1) + generateFib(n - 2); //1+0
//         }

//         // if (n <= 1) {
//         // 	return n;
//         // } else {
//         // 	return generateFib(n - 1) + generateFib(n - 2);
//         // }
// }

// console.log(generateFib(1)); // 1
// console.log(generateFib(3)); // 2

// const innerFuncA = addA(5); // what type is 'result' : function
// const sum = innerFuncA(6);
// console.log(sum); // 11

// const innerFuncB = addA(10);
// const sum2 = innerFuncB(12);
// console.log(sum2); // 22

// function normalAdd(a) {
//         console.log(a);
//         return;
// }
//const x = [];
//*******************************
// function add(item) {
//         const x = [];
//         x.push(item);
// }
// add(100);
// console.log(x);

// constructor/////////
const car1 = {
        brand: "ford",
        year: "1969",
        color: "red",
        model: "mustang",
};

function Car(brand, year, color, model) {
        this.brand = brand;
        this.year = year;
        this.color = color;
        this.model = model;
}
const car2 = new Car("tesla", "2019", "black", "model3");
console.log(car2);
