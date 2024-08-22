// Mảng thực chất có kiểu dữ liệu là object (xem lại bài 32.1)
// Khai báo mảng
let m = new Array();
console.log(typeof m);
console.log(m);

// Rõ ràng mảng M rỗng,
// nhưng vì kế thừa các phương thức và thuộc tính của cha
// nên chúng ta có thể sử dụng các thuộc tính
// và phương thức từ nguyên mẫu cha mẹ

console.log(m.length);
m.push(4);
console.log(m);
console.log(m.toString());

//Quay trở lại ví dụ đối tượng student
function Student(fullName, ID, birthYear, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  //phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}

// Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo Student
const sv1 = new Student("Nguyễn Văn A", "2024001", 2005, "Nam Định");
const sv2 = new Student("Nguyễn Văn B", "2024002", 2004, "Hà Nội");

console.log(sv1);

// Có cách nào để kiểm tra nguyên mẫu cha mẹ của đối tượng không?
//4. Xem nguyên mẫu - cha mẹ của đối tượng sv1

console.log("Kiểm tra nguyên mẫu cha mẹ của sv1");
console.log(Object.getPrototypeOf(sv1));
// console.log(sv1.__proto__); // cũ, và không khuyên dùng

// mọi hàm trong js đều có prototype
console.log("Student.prototype");
console.log(Student.prototype);
// check
console.log(Student.prototype === Object.getPrototypeOf(sv1));
// cách khác
console.log(Student.prototype.isPrototypeOf(sv1));

// 5. thêm phương thức vào Student.prototype
Student.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
console.log(sv1);
sv1.calcAge(); // 19
sv2.calcAge(); // 20

// 6. Thêm thuộc tính vào Student.prototype
Student.prototype.email = "noemail@gmail.com";
console.log(sv1.email);
console.log(sv2.email);

// Thực vậy, nếu kiểm tra sv1 có trực tiếp chứa thuộc tính email ?
console.log(sv1.hasOwnProperty("email"));
console.log(sv1.hasOwnProperty("fullName"));
console.log(sv1.hasOwnProperty("ID"));
