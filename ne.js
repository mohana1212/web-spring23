class Vehicle {
        constructor(brand, year, color) {
                this.brand = brand;
                this.year = year;
                this.color = color;
        }
}

class SUV extends Vehicle {
        #type;
        constructor(brand, year, color, doors) {
                super(brand, year, color);

                this.doors = doors;
                this.#type = "suv";
                this.seats = 7;
        }

        getSeats() {
                return this.seats;
        }

        static getType() {
                return this.#type;
        }
}

class Sedan {
        #type;
        constructor(brand, year, color, doors) {
                this.brand = brand;
                this.year = year;
                this.color = color;
                this.doors = doors;

                this.#type = "sedan";
                this.seats = 5;
        }

        getSeats() {
                return this.seats;
        }

        static getType() {
                return this.#type;
        }
}

console.log("my suv", new SUV("cadillac", "2023", "black", "4"));
console.log("my sedan", new Sedan("mercedes", "2023", "white", "4"));
