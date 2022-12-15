class Car {
  constructor(height, weight, width, color) {
    this.height = height;
    this.weight = weight;
    this.width = width;
    this.color = color;
    this.carConstruction(height, weight, width, color);
  }
  //Methods
  carConstruction(height, weight, width, color) {
    console.log(
      `The car is ${height}mts x ${width}mts and your weight is ${weight} your color is ${color}`
    );
  }

  //Setters
  set changeColor(color) {
    return (this.color = color);
  }
  //Getters
  get getColor() {
    return this.color;
  }
}
const carMilton = new Car(100, 250, 100, "white");
carMilton.changeColor = "pink";
console.log(carMilton, "carMilton");
console.log(carMilton.getColor, "color");
