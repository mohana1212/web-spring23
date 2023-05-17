//

// const car1 = {
//         brand: "ford",
//         year: "1969",
//         color: "red",
//         model: "mustang",
// };

// function Car(brand, year, color, model) {
//         this.brand = brand;
//         this.year = year;
//         this.color = color;
//         this.model = model;
// }
// const car2 = new Car("tesla", "2019", "black", "model3");
// console.log(car2);
// const animal1 = {
//         eyes: "grey",
//         legs: "four",
//         color: "red",
// };

function Animal(eyes, legs, color) {
        this.eyes = eyes;
        this.legs = legs;
        this.color = color;

        this.eat = function (chew) {
                console.log(chew);
        };
        this.sleep = function (eyes) {
                console.log(eyes);
        };
}

const animal2 = new Animal("blue", "two", "black");
const animal3 = new Animal("black", "four", "brown");
const animal4 = new Animal("yellow", "two", "white");

// console.log(animal2, animal2, animal3);
animal2.eat("meat");
animal2.sleep("eyes closed");

// //

// function Bird(eyes, legs, color, name) {
//         this.eyes = eyes;
//         this.legs = legs;
//         this.color = color;
//         this.name = name;

//         this.eat = function (chew = "meat") {
//                 console.log(chew);
//         };
//         this.sleep = function (eyes = "eyes closed") {
//                 console.log(eyes);
//         };
// }

// const bird2 = new Bird("blue", "two", "black", "sai");
// const bird3 = new Bird("black", "four", "brown", "mohana");
// const bird4 = new Bird("yellow", "two", "white", "moulina");

// console.log(bird2, bird3, bird4);
// bird2.eat("meat");

// bird2.sleep("eyes closed");

// bird3.eat("meat");

// bird3.sleep("eyes closed");

// bird4.eat("meat");

// bird4.sleep("eyes closed");
