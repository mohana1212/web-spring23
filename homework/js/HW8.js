class Bulding {
        #hasWalls;
        #numOfWalls;
        #roofShape;
        constructor(hasWalls, numOfWalls, roofShape) {
                // super(brand, year, color);

                this.#hasWalls = hasWalls;
                this.#numOfWalls = numOfWalls;
                this.#roofShape = roofShape;
        }
        openDoor() {
                console.log("DOOR OPEN");
        }
        closeDoor() {
                console.log("DOOR CLOSE");
        }

        static gethasWalls() {
                return this.#hasWalls;
        }

        sethasWalls(value) {
                this.#hasWalls = value;
        }

        static getnumOfWalls() {
                return this.#numOfWalls;
        }

        setnumOfWalls(value) {
                this.#numOfWalls = value;
        }

        static getroofShape() {
                return this.#roofShape;
        }

        setroofShape(value) {
                this.#roofShape = value;
        }
}
class Gym extends Bulding {
        #gymName;
        #hasPool;
        constructor(hasWalls, numOfWalls, roofShape) {
                super(hasWalls, numOfWalls, roofShape);

                this.#gymName = "Fitness19";
                this.#hasPool = "swiming";
        }
        closeGym() {
                console.log("Gym Closed");
        }

        openGym() {
                console.log("Gym opened");
        }

        static getgymName() {
                return this.#gymName;
        }

        setgymName(value) {
                this.#gymName = value;
        }

        static gethasPool() {
                return this.#hasPool;
        }

        sethasPool(value) {
                this.#hasPool = value;
        }
}

class Bank extends Bulding {
        #numOfvault;
        #numOfStaff;
        #name;
        constructor(
                hasWalls,
                numOfWalls,
                roofShape,
                numOfvault,
                numOfStaff,
                name
        ) {
                super(hasWalls, numOfWalls, roofShape);

                this.#numOfvault = numOfvault;
                this.#numOfStaff = numOfStaff;
                this.#name = name;
        }

        closeBank() {
                console.log("Bank Closed");
        }

        openBank() {
                console.log("Bank Opened");
        }

        static getnumOfvault() {
                return this.#numOfvault;
        }

        setnumOfvault(value) {
                this.#numOfvault = value;
        }

        static getnumOfStaff() {
                return this.#numOfStaff;
        }

        setnumOfStaff(value) {
                this.#numOfStaff = value;
        }

        static getname() {
                return this.#name;
        }

        setname(value) {
                this.#name = value;
        }
}

// const myGym = new Gym("true", 4, "square", "JS center", "true");

// console.log(myGym);
// const myBank = new Bank("true", 3, "circle", 20, 100, "BOFA");

// console.log(myBank.name);
console.log("GYM", new Gym("true", "4", "square", "JS center", "true"));
console.log("BANK", new Bank("true", "3", "circle", "20", "100", "BOFA"));
