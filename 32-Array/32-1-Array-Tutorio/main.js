// tạo sẵn có phần từ bên trong
let arr1 = [];
console.log(arr1);
let arr2 = [1, 2, 3, 4];
console.log(arr2);
let arr3 = [1, 2, "name", false, [3, 4, 6]];
console.log(arr3);

// sử dụng Array and Constructor
// Khai báo mảng rỗng sử dũng Array constructor
let arr4 = new Array();
console.log(arr4);
let arr5 = new Array(1, 2, "name", false);
console.log(arr5);
// tạo mảng có độ dài xác định,các phần từ là undefined
let arrWithLength = new Array(5);
console.log(arrWithLength);

// Truy xuất phần tử của mạng qua vị trí index
let arr6 = [3, 4, 5, 6];
console.log(arr6[2]); // 5
console.log(arr6[3]); // 6

// thuộc tính length
console.log(arr6.length); // 4

// gán ,thay đổi giá trị mảng qua index
let arr7 = [5, 6, 7];
arr7[1] = 10;
console.log(arr7); // 5 10 7

// duyệt mảng
let arr8 = [1, 2, 3, 4, 5];
console.log(arr8);
for (let i = 0; i < arr8.length; i++) {
  arr8[i] = arr8[i] * 2;
}
console.log(arr8);
// for..of :chỉ có thể xem không sửa được mảng
let count = 0;
let arr9 = [1, 2, 3, 4, 5];
for (let element of arr9) {
  console.log(element);
  // check phần tử chia hết cho 2
  if (element % 2 === 0) {
    count++;
  }
}
console.log(`số phần tử chua hết cho 2 trong mảng : ${count}`);
