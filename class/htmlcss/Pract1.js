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
