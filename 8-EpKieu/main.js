let numberA = prompt("mời bạn nhập vào numberA");
console.log(typeof numberA);
let numberB = 5;
console.log(typeof numberB);
// cộng a vs b
console.log(numberA + numberB);
console.log(typeof (numberA + numberB));
// cách phép tính khác
console.log(numberA - numberB);
console.log(numberA * numberB);
console.log(numberA / numberB);
console.log(numberA % numberB);
// ép kiểu dữ liệu khi người dùng nhập vào
let numberC = parseInt(prompt("mời bạn nhập vào numberC"));
let numberD = parseFloat(prompt("mời bạn nhập vào numberD"));
let numberE = Number(prompt("mời bạn nhập vào numberE"));
console.log(`C` + typeof numberC);
console.log(`D` + typeof numberD);
console.log(`E` + typeof numberE);
