for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  } else {
    console.log(i);
  }
}

let n = 0;
while (n < 100) {
  n++;
  if (n === 4) {
    break;
  }
}
console.log(`Giá trị cuối cùng của n là : ${n}`);
