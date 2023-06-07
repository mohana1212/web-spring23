class Bulding {
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

        get hasWalls() {
                return this.#hasWalls;
        }

        set hasWalls(value) {
                this.#hasWalls = value;
        }

        get numOfWalls() {
                return this.#numOfWalls;
        }

        set numOfWalls(value) {
                this.#numOfWalls = value;
        }

        get roofShape() {
                return this.#roofShape;
        }

        set roofShape(value) {
                this.#roofShape = value;
        }
}
class Gym extends Bulding {
        constructor(hasWalls, numOfWalls, roofShape, gymName, hasPool) {
                super(hasWalls, numOfWalls, roofShape);

                this.#gymName = gymName;
                this.#hasPool = hasPool;
        }
        closeGym() {
                console.log("Gym Closed");
        }

        openGym() {
                console.log("Gym opened");
        }

        get gymName() {
                return this.#gymName;
        }

        set gymName(value) {
                this.#gymName = value;
        }

        get hasPool() {
                return this.#hasPool;
        }

        set hasPool(value) {
                this.#hasPool = value;
        }
}

class Bank extends Bulding {
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

        get numOfvault() {
                return this.#numOfvault;
        }

        set numOfvault(value) {
                this.#numOfvault = value;
        }

        get numOfStaff() {
                return this.#numOfStaff;
        }

        set numOfStaff(value) {
                this.#numOfStaff = value;
        }

        get name() {
                return this.#name;
        }

        set name(value) {
                this.#name = value;
        }
}

const myGym = new Gym(true, 4, "square", "JS center", true);
console.log(myGym.gymName);
const myBank = new Bank(true, 1, "circle", 20, 100, "BOFA");
console.log(myBank.name);
