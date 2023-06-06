class Phone {
        constructor(brand, year, color, model) {
                this.brand = brand;
                this.year = year;
                this.color = color;
                this.model = model;
        }
        call() {
                console.log("call");
        }
}
const iphone = new Phone("iphone", "2022", "blue", "iphone13");
const samsung = new Phone("Samsung", "2022", "black", "S10");
const google = new Phone("Google", "2022", "white", "G+");

iphone.call();
console.log(iphone.brand);
console.log(samsung);
console.log(google);
