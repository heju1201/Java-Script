let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof b);

// 8 giá trịnh falsy khi chuyển đổi sang bool sẽ là false
// false, 0, -0, 0n, "", null, undefined, NaN
// VD : kiểm tra 1 biến đã được gán giá trị hay undefined
let salary;
console.log(Boolean(salary));
