// 1. Hàm Number(value) : chuyển value sang số
// nếu không chuyển được trả về NaN
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);
// let numb = Number(prompt("mời nhập 1 số bất kì : "));
// console.log(numb);

// 2. Hàm isNaN(value) : kiểm tra không phải là số
// trả về true nếu giá trị chuyển đổi không phải là số
// trả về false nếu giá trị chuyển đổi là số
let a = 123;
console.log(isNaN(a)); // false
a = "123";
console.log(isNaN(a)); // false
a = "123b";
console.log(isNaN(a)); // true
console.log(isNaN(true)); // false, true có thể định nghĩa là 1, false có thể là 0
let b = Number(true);
console.log(b); // 1
console.log(typeof b); // number
console.log(isNaN(b)); // false
console.log(""); // false, this is coerced
console.log(" "); // false, this is coerced

// 3.Hàm Number.isNaN kiểm tra xem value có giá trị là NaN hay không
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc" / "def")); // true
console.log("abc" / "def"); // NaN
console.log(Number.isNaN(0 / 0)); // true
console.log(0 / 0); // NaN
console.log(Number.isNaN({})); // false
console.log(Number.isNaN("abds")); // false
