//Bài 1
/*
Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên có n phần tử, 
n do người dùng nhập từ bàn phím  
*/

// let n = Number(prompt("Nhập số phần từ trong mảng.\nlà số nguyên > 0"));
// let arr = [];
// while (true) {
//   if (!Number.isInteger(n) || n <= 0) {
//     alert("Nhập sai,phải là số nguyên > 0.");
//     n = Number(prompt("Nhập lại.\nPhải là số nguyên > 0"));
//   } else {
//     for (let i = 0; i < n; i++) {
//       let pt = prompt("Nhập phần từ thứ " + (i + 1) + " trong mảng.");
//       console.log(i);
//       arr.push(pt);
//     }
//     console.log(arr);
//     break;
//   }
// }

// ----------------------------------------------------------------

// bài 2
/*
1. Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên, 
có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím 
2. Xuất các giá trị trong mảng
3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
4. Sắp xếp mảng tăng dần
5. Tính tổng các phần tử trong mảng
6. Cho người dùng nhập 1 số bất kỳ, 
kiểm tra số đó có tồn tại trong mảng hay không, 
nếu có xuất ra vị trí index của số đó trong mảng  
*/

let n = Number(prompt("Nhập số phần từ trong mảng"));
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
let arr2 = [...arr];
console.log("2.xuất mảng");
console.log(arr);
console.log("3.Đảo ngược mảng");
console.log(arr2.reverse());
console.log("4.Tăng đần");
console.log(arr.sort((a, b) => a - b));
console.log("5.Tổng các phần tử trong mảng");
console.log(arr.reduce((a, b) => a + b, 0));
let search = Number(prompt("Nhập phần tử cần tìm"));
console.log("6.Tìm kiếm phần tử");
let index = [];
for (let i = 0; i < arr.length; i++) {
  if (search === arr[i]) {
    index.push(i);
  }
}
if (index.length === 0) {
  console.log(`Không có phần tử ${search} trong mảng`);
} else {
  console.log(`Phần tử ${search} xuất hiện ở ${index.join()} trong mảng`);
}
