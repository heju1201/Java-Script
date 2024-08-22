// 1. Tạo đối tượng date : sử dụng new Date() để tạo đối tượng Date mới
// new Data()
let currentDate = new Date();
console.log(typeof currentDate);
console.log(currentDate);

// ----------------------------------------------------------------

// 2. các phương thức lấy thông tin thời gian
// năm,tháng,ngày,giờ,phút,giây
const year = currentDate.getFullYear(); // lấy năm hiện tại
const month = currentDate.getMonth(); // lấy tháng hiện tại
const date = currentDate.getDate(); // lấy ngày hiện tại
const hours = currentDate.getHours(); // lấy giờ hiện tại
const minutes = currentDate.getMinutes(); // lấy phút hiện tại
const seconds = currentDate.getSeconds(); // lấy giây hiện tại
console.log("Năm hiện tại: " + year);
console.log("Tháng hiện tại: " + month);
console.log("Ngày hiện tại: " + date);
console.log("Giờ hiện tại: " + hours);
console.log("Phút hiện tại: " + minutes);
console.log("Giây hiện tại: " + seconds);

// ----------------------------------------------------------------

// 3. Timestamp là gì
// Timestamp là một đại diện cho một điểm cụ thể trong thời gian, tính bằng millisecond Từ mốc 0
// Mốc thời gian 0:
// 00:00:00 ngày 1 tháng 1 năm 1970
let timestamp1 = new Date(0);
console.log(timestamp1);

// sử dụng getTime() : để lấy Timestamp hiện tại
let currentTimestamp = currentDate.getTime();
console.log(currentTimestamp);

// 4. set thời gian theo ý muôn
// cách 1 :  new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
let myDate1 = new Date(2024, 7, 19); //tháng tính từ 0
console.log(myDate1);
console.log(myDate1.toLocaleDateString());

// cách 2 : new Date(dateString)
const myDate2 = new Date("2024-08-19T11:06:45");
console.log(myDate2);
console.log(myDate2.toLocaleDateString());
// "2024-08-19" là năm xong đến tháng xong đến ngày
// "T"là ký tự phân tách
// 11:06 là thơi gian 11:06

// cách 3 : sử dụng set : vd : setFullYear(), setMonth(), setDate,....
let myDate3 = new Date();
myDate3.setFullYear(2001);
myDate3.setMonth(1);
myDate3.setDate(4);
myDate3.setHours(15);
myDate3.setMinutes(45);
console.log(myDate3);
console.log(myDate3.toLocaleDateString());
console.log(myDate3.toLocaleTimeString());

// cách 4 : xuất ngày tháng năm theo định dạng mong muốn(tự code)
console.log(
  `
Ngày ${myDate3.getDate()}, Tháng ${myDate3.getMonth()}, Năm ${myDate3.getFullYear()}
`
);

let prefixDate = myDate3.getDate() < 10 ? "0" : "";
let prefixMonth = myDate3.getMonth() < 9 ? "0" : "";
console.log(`
Ngày ${prefixDate}${myDate3.getDate()}, Tháng ${prefixMonth}${myDate3.getMonth()}, Năm ${myDate3.getFullYear()}
`);

// ----------------------------------------------------------------

//4. setTimeout
/* 
setTimeout được sử dụng để thực hiện một hàm 
sau một khoảng thời gian nhất định.
Cú pháp: 
setTimeout(function, milliseconds, param1, param2, ...)
function: Hàm mà chúng ta muốn thực hiện sau khoảng thời gian.
delay: Thời gian chờ trước khi hàm được gọi, được đo bằng mili giây.
*/

let helloWord = () => {
  console.log("Hello Word");
};
// helloWord();
//setTimeout(helloWord, 3000); // sau 3s với thực thi

// với function declaration
function helloWordD() {
  console.log("Hello Word declaration");
}
// setTimeout(helloWordD, 3000);

//  với function expression
let helloExpression = function () {
  console.log("Hello in function expression");
};
// setTimeout(helloExpression, 3000);

// trực tiếp vs setTimeout
// setTimeout(function helloWordD() {
//   console.log("Hello Word declaration");
// }, 3000);

// arrow function
let helloA = (name) => {
  console.log("Hello " + name);
};
// helloA("lê");
// setTimeout(helloA, 3000, "Hiếu");

// ----------------------------------------------------------------

// 5.clearTimeout để hủy thực hiện hàm
let timeOut = setTimeout(helloA, 3000, "Hiếu");
clearTimeout(timeOut);

// ----------------------------------------------------------------

// 6. setInterval : giúp hàm thực hiện function lặp đi lặp lai
// sau một khoảng thời gian cố định.
// Cú pháp:
//setInterval(function, milliseconds,param1, param2,.. )

// VD1
function show() {
  console.log("bạn có j muốn nói không");
}
// setInterval(show, 2000);

// VD2
function upDateTime() {
  let currentTimes = new Date();
  console.log(currentTimes);
}
// setInterval(upDateTime, 2000);

// VD3
let counter = 0;
function count() {
  console.log(counter++);
}
// setInterval(count);
// setInterval(count, 1000);

// VD4 huỷ lặp
let count1 = () => {
  console.log(counter++);
  if (counter === 5) {
    // step 2: Dừng lặp dùng clearInterval
    clearInterval(stopInterval);
  }
};

//step 1: Gán biến để nhận giá trị trả về
let stopInterval = setInterval(count1, 1000);
