/*
STT	phương thức
1	concat ()
2	push ()
3	unshift ()
4	pop ()
5	shift ()
6	slice ()
7	includes ()
8   indexOf()
9   lastIndexOf()
10  reverse()
11  join(separator)
12 splice()
13 Toán tử Spread (...) - ES6
14 sort()
15 reduce()
16 filter()
*/

// 1. concat() : nối mảng hiện tại với mảng khác để trả về mảng mới
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrNew = arr1.concat(arr2);
console.log(arrNew); // [1,2,3,4,5,6]

// -----------------------------------------------------------

// 2. push() : thêm một hoặc nhiều phần tử vào cuối gốc mảng
arr3 = [1, 2, 3];
arr3.push(4, 5);
console.log(arr3); // [1,2,3,4,5]

// -----------------------------------------------------------

// 3. unshift() : thêm một hoặc nhiều phần tử vào đầu gốc mảng
let arr4 = [2, 3];
arr4.unshift(0, 1);
console.log(arr4); // [0,1,2,3]

// -----------------------------------------------------------

// 4. pop() : loại bỏ phần từ cuối cùng của mảng(làm thay đổi mảng gốc)
// và trả về phần tử bị loại bỏ
let arr5 = [1, 2, 3];
let removedElement = arr5.pop();
console.log(arr5); // [1,2]
console.log(removedElement); // 3

// -----------------------------------------------------------

// 5. shift() : loại bỏ phần từ đầu tiên của mảng(làm thay đổi mảng gốc)
// và trả về phần tử bị loại bỏ
let arr6 = [1, 2, 3];
let removedElement2 = arr6.shift();
console.log(arr6); // [2,3]
console.log(removedElement2); // 1

// -----------------------------------------------------------

// 6. slice(start, end): Tạo một bản sao của mảng cắt từ start đến end-1
// từ một vị trí bắt đầu đến một vị trí kết thúc (không bao gồm vị trí kết thúc).
let arr7 = [1, 2, 3, 4, 5];
let sliceArr = arr7.slice(1, 4); // cắt từ 1 đến sát 4
console.log(sliceArr); // [2,3,4]

// -----------------------------------------------------------

// 7. includes(): Kiểm tra xem một mảng có chứa một giá trị cụ thể hay không.
// Trả về true nếu có và false nếu không.
let arr8 = [1, 2, 3, 4, 5];
let isPresent = arr8.includes(3);
console.log(isPresent); // true

// -----------------------------------------------------------

//8. indexOf(): Trả về vị trí index của phần tử xuất hiện lần đầu tiên trong mảng nếu tìm thấy.
//Trả về -1 nếu không tìm thấy.
let arr9 = [1, 2, 3, 4, 2, 5];
let index1 = arr9.indexOf(3);
let index2 = arr9.indexOf(6);
console.log(index1); // 2
console.log(index2); // -1

// -----------------------------------------------------------

//9. lastIndexOf(). Trả về vị trí index của phần tử xuất hiện lần cuối cùng trong mảng nếu tìm thấy.
//Trả về -1 nếu không tìm thấy.
let arr10 = [1, 2, 3, 4, 2, 5];
let index3 = arr9.lastIndexOf(2);
let index4 = arr9.lastIndexOf(6);
console.log(index3); // 4
console.log(index4); // -1

// -----------------------------------------------------------

//10.reverse(): đảo ngược thứ tự của các phần tử trong mảng gốc.
//Nó thay đổi mảng gốc và không tạo ra mảng mới.
let arr11 = [1, 2, 4, 5, 7];
arr11.reverse();
console.log(arr11); // [7,5,4,2,1]
// Lưu ý: reverse làm thay đổi mảng gốc,
// Nếu muốn giữ nguyên bản gốc, hãy reverse trên bản sao
let arr12 = [1, 2, 4, 5, 7];
let arr13 = arr12.slice().reverse();
console.log(arr12); // [1,2,4,5,7]
console.log(arr13); // [7,5,4,2,1]

// -----------------------------------------------------------

//11. join() :
/*
array.join(separator);
 Nối các phần tử trong mảng thành chuỗi, theo ký tự phân tách 'separator'
 separator : Nếu bỏ trống sẽ mặc định là dấu ,
 Phương thức này không thay đổi mảng gốc.
*/
// không chuyển separator
let arr14 = ["buồn", "ngủ", "quá", 2, 3];
let string1 = arr14.join();
console.log(string1); // buồn,ngủ,quá,2,3
console.log(typeof string1); // string
//có chuyền separator
let arr15 = ["buồn", "ngủ", "quá", 2, 3];
let string2 = arr15.join("-");
console.log(string2); // buồn-ngủ-quá-2-3

// -----------------------------------------------------------

// 12.  splice():  array.splice(start, deleteCount, item1, item2, ...);

/*
start: Chỉ định vị trí bắt đầu thay đổi mảng. Nếu là một số âm, nó sẽ được tính từ cuối mảng.
deleteCount: Số nguyên chỉ định số lượng phần tử sẽ bị loại bỏ từ mảng, bắt đầu từ vị trí start. Nếu deleteCount là 0, không có phần tử nào bị loại bỏ.
item1, item2, ...: Các phần tử mới sẽ được thêm vào mảng từ vị trí start
*/
// lọa bỏ phần từ từ mảng
let arr16 = [1, 2, 3, 4, 5];
// arr16.splice(2, 2); // loại bỏ 2 phần từ ở vị trí 2 (3,4)
// console.log(arr16); // [1,2,5]
arr16.splice(-2, 2); // loại bỏ 2 phần từ ở vị trí -3 (4,5)
console.log(arr16); // [1,2,3]

//thay thế phần tử trong mảng
let arr17 = [1, 2, 3, 4, 5];
arr17.splice(2, 1, 6, 7); //xóa từ vị trí index 2, xóa đi 1 ký tự và Thêm phần tử 6,7 từ vị trí index 2
console.log(arr17);
// thêm phần tử vào mảng
let arr18 = [1, 2, 3, 4, 5];
arr18.splice(2, 0, 6, 7, 8, 9);
// Xóa 0 phần tử
// Thêm 6, 7, 8, 9 vào mảng từ vị trí index 2
console.log(arr18);

// -----------------------------------------------------------

// 13. Toán tử Spread (...) - ES6
//13.1 Tạo bản sao (clone) của mảng:
//Tạo ra mảng mới nằm trên ô nhớ mới, có phần tử giống hệt mảng gốc
let m1 = [1, 2, 3];
let m2 = [...m1];
console.log(m2); //[1,2,3]
// mảng m2 là clone của m1
// thay đổi giá trị m2 không liên quan đếm m1
m2[0] = 99;
console.log(m1); // [1,2,3]
console.log(m2); // [99,2,3]

//13.2 Truyền đối số vào hàm:
function sum(a, b, c) {
  return a + b + c;
}
let numB = [1, 2, 3];
let result = sum(...numB);
console.log(result); // 6;

//13.3 Kết hợp mảng:
let arr19 = [1, 2, 3];
let arr20 = [4, 5, 6];
let kh = [...arr19, ...arr20];
console.log(kh); // [1,2,3,4,5,6]

//13.4 Tạo mảng mới với thêm phần tử:
let m3 = [1, 2, 3];
let m4 = [...m3, 4, 5];
console.log(m4); // [1,2,3,4,5]
//13.5 Chuyển đổi iterable thành mảng:
let ngu = "Buồn Ngủ Quá Rồi";
let chars = [...ngu];
console.log(chars); // ['B', 'u', 'ồ', 'n', ' ', 'N', 'g', 'ủ', ' ', 'Q', 'u', 'á', ' ', 'R', 'ồ', 'i']

// -----------------------------------------------------------

// 14. Phương thức sort()
//14.1 Khi không truyền compareFunction

let m5 = ["c", "a", "b"];
// Duyệt mảng xem vị trí trong unicode
for (element of m5) {
  console.log(`${element} có mã unicode là : ${element.charCodeAt()}`);
}
// "c": 99,"a: 97","b": 98
let sort1 = m5.sort();
console.log(sort1); // ["a", "b", "c"]

/*
Trường hợp 2: phần tử có nhiều ký tự: So sánh các ký tự đầu để xếp
Nếu ký tự giống nhau, so tiếp đến ký tự phía sau, 
mã unicode thấp hơn xếp trước
*/
let m6 = ["bba", "baa", "bcb"];
let sort2 = m6.sort();
console.log(sort2); // ["baa", "bba", "bcb"]

// Ví dụ với ký tự số (vì xếp theo unicode nên kq không như mong muốn)
let m7 = [1000, 1, 9];
let sort3 = m7.sort();
console.log(sort3); // [1,1000,9]
console.log("1".charCodeAt()); // 49
console.log("9".charCodeAt()); // 57
console.log("0".charCodeAt()); // 48

// 14.2 so sánh với hàm so sánh Compare Function
/*
Hàm So sánh (Compare Function):
Nếu compareFunction(a, b) trả về một giá trị < 0, a sẽ được đặt trước b.
Nếu compareFunction(a, b) trả về 0, thứ tự giữa a và b không thay đổi.
Nếu compareFunction(a, b) trả về một giá trị > 0, b sẽ được đặt trước a.
*/
let m8 = [9, 3, 4, 5];
console.log(m8); //[9,3,4,5]
// sau khi sắp xếp tăng đần
let sort4 = m8.sort((a, b) => a - b);
console.log(sort4); //[3,4,5,9]
// sau khi sắp xếp giảm đần
let sort5 = m8.sort((a, b) => b - a);
console.log(sort5); //[9,5,4,3]

// -----------------------------------------------------------

// 15. Phương thức reduce()
//dựa trên một hàm xử lý -> tính toán và trả về một giá trị duy nhất sau tính toán
/*
Syntax : reduce(function, [initialValue]) 
1. function: Một hàm để thực thi cho từng phần tử trong mảng
2. initialValue : Giá trị khởi tạo
*/
// Bài toán khi không dùng reduce()
let M1 = [3, 2, 3];
// Thực hiện tính tổng các phần tử trong mảng
//1.Giá trị khởi tạo ban đầu
let sum1 = 0;
for (let element of M1) {
  sum1 += element;
}
console.log("Tổng các phần tử trong mảng: " + sum1);

// khi dùng reduce()
/*
accumulator: Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm .
currentValue: Giá trị hiện tại đang xử lý trong mảng. 
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý. 
array: (Tùy chọn) Mảng đang được reduce.
*/
// let M1 = [3, 2, 3];
/*
1.Tham số thứ 2: initialValue giá trị khởi tạo của accumulator ban đầu,
2. Nếu bỏ trống initialValue: 
  a. accumulator: tích lũy sẽ lấy giá trị đầu tiên trong mảng làm giá trị khởi tạo, 
    và sẽ bắt đầu thực hiện từ phần tử thứ 2
  b. Nếu mảng trống mà 0 có giá trị initialValue --> reduce() Sẽ báo lỗi
*/
let sum2 = M1.reduce(
  // tham số đầu tiên function
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  // tham số thứ 2 : initialValue
  0
);
console.log(sum2);

// Rút gọn lại
let sum3 = M1.reduce((a, b) => a + b, 0);
console.log(sum3);

// -----------------------------------------------------------

// 16. Phương thức filter()
/*
Cú pháp:    array.filter( function)

function(currentValue, [currentIndex] , [array])
Hàm được gọi với những đối số sau: 
currentValue: Giá trị hiện tại đang xử lý trong mảng. 
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý. 
array: (Tùy chọn) Mảng đang được duyệt.
*/
let numbers = [1, 2, 3, 4, 5];
// tìm cách số chẵn trong mảng
let eventNumbers = numbers.filter(
  //function
  (value, index, array) => value % 2 === 0
);
console.log(eventNumbers);
