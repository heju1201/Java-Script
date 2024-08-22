// 1. Static method
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  draw() {
    console.log("Phương thước draw gọi");
  }
  static calAge(radius) {
    return Math.PI * radius * radius;
  }
}

// Tạo đối tượng
const c1 = new Circle(10);
const c2 = new Circle(5);
console.log(c1.draw());
console.log(c2.draw());

// console.log(c1.calAge(10));
// console.log(c2.calAge(5));

console.log(Circle.calAge(10));
console.log(Circle.calAge(5));

// ví dụ dễ hiểu Static method:  Math
a = -10;
console.log(Math.abs(a));
