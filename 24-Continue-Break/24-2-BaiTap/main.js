// Bài 1 : Viết trương trình nhập vào số nguyên n, in ra kết quả n!

// Cách 1 : for
// let n = Number(prompt("mời bạn nhận số nguyên n : "));
// let tong = 1;
// console.log(`số nguyên bạn nhập là ${n}`);
// for (let i = 1; i <= n; i++) {
//   tong *= i;
// }
// console.log(`Kết quả ${n}! = ${tong}`);

// cách 2 : while
// let n = Number(prompt("mời bạn nhận số nguyên n : "));
// let tong = 1;
// let i = 1;
// console.log(`số nguyên bạn nhập là ${n}`);
// while (i <= n) {
//   tong *= i;
//   i++;
// }
// console.log(`Kết quả ${n}! = ${tong}`);

// --------------------------------------------------------------------

// bài 2 : Viết chương trình nhập số a từ bàn phím
// nếu a chẵn thì tính tổng các số chẵn từ 0 đến a
// nếu số lẻ thì in ra dòng chữ gì đó

// let a = Number(prompt(`Nhập một số nguyên a : `));
// let tong = 0;
// if (a % 2 === 0) {
//   for (let i = 0; i <= a; i++) {
//     if (i % 2 === 0) {
//       tong += i;
//     }
//     i++;
//   }
//   console.log(`tổng các số chẵn từ 0 đến ${a} là : ${tong}`);
// } else {
//   console.log(`Tôi không tính số lẻ.`);
// }

// --------------------------------------------------------------------

// bài 3 Viết chương trình tính tổng các số lẻ từ 1 đến n, bỏ qua số 3

// let n = Number(prompt(" Nhập một số nguyên n :"));
// let tong = 0;
// console.log(`số nguyên bạn nhập là ${n}`);
// for (let i = 0; i <= n; i++) {
//   if (i % 2 !== 0) {
//     if (i !== 3) {
//       tong += i;
//     }
//   }
// }
// console.log(`Kết quả tổng các số lẻ trừ 3 từ 0 -> ${n} = ${tong}`);

// --------------------------------------------------------------------

// bài 4 : tìm những số chia hết cho 3 từ 10 đến 50
// for (i = 10; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// --------------------------------------------------------------------

// Bài 5 : Viết chương trình tính tổng S = 1!+2!+3!+...+10!
// let s = 0;
// let tich = 1;
// for (i = 1; i <= 10; i++) {
//   tich *= i;
//   s += tich;
// }
// console.log(`Tổng cần thính là : ${s}`);

// --------------------------------------------------------------------

// Bài 6 : số hoàn thiện từ 1 đếm 1000
// let tUoc = 0;
// for (let i = 1; i <= 1000; i++) {
//   for (let j = 1; j < i; j++) {
//     if (i % j === 0) {
//       tUoc += j;
//     }
//   }
//   if (tUoc === i) {
//     console.log(tUoc);
//   }
//   tUoc = 0;
// }

// --------------------------------------------------------------------

// Bài 7 : Chương trình nhập số nguyên a > 0 cho biết số đó phải số nguyên tố hay không

let a = Number(prompt("Nhập mốt số nguyên bất kì a > 0 thừ bàn phím : "));
if (a > 1 && a % a == 0) {
  console.log("là só nguyên tố");
}
