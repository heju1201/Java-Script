// 1.hàm Math.random()
// a. random trong {0 -> 1)
let randomValue = Math.random();
console.log("số ngẫu nhiên từ 0 đến sát 1 là : " + randomValue);

// b. random số lớn hơn 1
let randomValue1 = Math.random() * 10;
console.log("số ngẫu nhiên từ 0 đến sát 10 là : " + randomValue1);

// c. random số nguyên
let randomValue2 = parseInt(Math.random() * 10);
console.log("số ngẫu nhiên là số nguyên : " + randomValue2);

// d random số sát 30
let randomValue3 = parseInt(Math.random() * 30);
console.log("số ngẫu nhiên là số nguyên : " + randomValue3);

// d random số sát 30 tối thiểu là 10
let randomValue4 = parseInt(Math.random() * 20) + 10;
console.log("số ngẫu nhiên là số nguyên : " + randomValue4);
