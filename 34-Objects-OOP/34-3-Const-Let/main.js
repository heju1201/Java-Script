// Ôn tập
// 1. var cho phép tái định nghĩa, còn let thì không
var a = 5;
console.log(a);
var a = 9;
console.log(a);
let b = 5;
console.log(a);
// let b = 9;
// console.log(a);

//const
const doSoi = 100;
// doSoi = 50;
console.log(doSoi);

// Khai báo đối tượng let
let person = {
  name: "John",
  age: 30,
};
// thử thay đổi giá trị của person
person = 5;
console.log(person); // 5
// để tránh điều này xảy ra, thường sử dụng const để khai báo đối tượng
const person2 = {
  name: "John",
  age: 30,
};
// thử thay đổi giá trị của person
// person2 = 5; // báo lỗi
console.log(person2);

// Và tất nhiên chúng ta vẫn thêm, sửa, xóa thuộc tính bình thường,
// chỉ là 0 ghi đè được lại đối tượng đã khai báo
person2.isAdmin = true; // thêm mới thuộc tính cho person2
person2.name = "buồn ngủ"; // sưa thuộc tính
delete person2.age; // xóa thuộc tính
console.log(person2);
