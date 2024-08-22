class Shape {
  constructor(name) {
    this.name;
  }
  calculateArea() {
    return 0;
  }
}
class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }
  // Override
  calculateArea() {
    return this.side * this.side;
  }
}
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  // Override
  calculateArea() {
    return this.width * this.height;
  }
}
const square = new Square("Square", 4);
console.log("Square");
console.log(square);
console.log(square.calculateArea());

const rectangle = new Rectangle("Rectangle", 4, 5);
console.log("Rectangle");
console.log(rectangle);
console.log(rectangle.calculateArea());
