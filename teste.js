function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}
Car.prototype.drive = function () {
  console.log(`You drive the ${this.make}`);
};

const car1 = new Car("Ford", "Mustang", "2024", "red");
const car2 = new Car("Dodge", "Charger", "2026", "silver");
const car3 = new Car("Chevrolet", "Camaro", "2025", "blue");

car1.drive();
console.log(car2.make);
