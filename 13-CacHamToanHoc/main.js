// 1. Hàm `Math.sqrt()` : căn bậc 2
let a = Math.sqrt(4);
console.log(`Căn bậc hai của 4 là : ${a}`);

// 2. Hàm `Math.pow()` : só mũ
let b = 2,
  c = 3,
  result = Math.pow(b, c);
console.log(`${b} mũ ${c} là : ${result}`);

// 3. Hàm `Math.abs()` : Giá trị tuyệt đối
let d = -4;
let absoluteValue = Math.abs(d);
console.log(`Giá trị tuyệt đối của ${d} Là : ${absoluteValue}`);

// 4. Hàm `Math.ceil()` : làm tròn lên , Hàm `Math.floor()` : Làm tròn xuống
let e = 4.01,
  cValue = Math.ceil(e),
  fValue = Math.floor(e);
console.log(
  `Số ${e} : Khi Làm trong lên : ${cValue}, Khi Làm Tròn xuống : ${fValue}`
);

// 5. Hàm `Math.round()` , từ 0.5 làm tròn thành 1
let f = 5.49,
  g = 5.5;
console.log(`Làm tròn số ${f} là : ${Math.round(f)}`);
console.log(`Làm tròn số ${g} là : ${Math.round(g)}`);

// 6. Hàm `toFixed()` làm tròn lên số đơn vị nhập vào
let h = 3.14159;
let tF = h.toFixed(2);
console.log(`${h} kho được làm tròn : ${tF}`);
// lưu ý toFixed dẽ trả về kết quả là string
console.log(
  `Kiểu dữ liệu của ${tF} sau thi dùng hàm toFixed làm tròng : ${typeof tF}`
);
// Muốn là số thì phải ep kiểu sang number thì phải thêm parseFloat() , parseInt() hoặc Number() đằng trước

// 7. Hàm `Math.min()` và `Math.max()`
let num1 = 4,
  num2 = 2,
  num3 = 1;
let maxValue = Math.max(num1, num2, num3);
let minValue = Math.min(num1, num2, num3);
console.log(
  `Giá trị nhỏ nhất trong các số ${num1}, ${num2}, ${num3} Là ${minValue}`
);
console.log(
  `Giá trị lớn nhất trong các số ${num1}, ${num2}, ${num3} Là ${maxValue}`
);
