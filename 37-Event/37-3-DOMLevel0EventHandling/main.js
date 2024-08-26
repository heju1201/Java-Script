//37.3 - Event - DOM Level 0 Event Handling
//(phần function ôn lại bài 25.1 25.2)
/*
DOM Level 0 Event Handling:  
là phương pháp bắt sự kiện bằng cách gán trực tiếp một
 hàm JavaScript cho thuộc tính sự kiện của phần tử HTML

*/
//1.1 Xác định phần tử có id là btn
const btn = document.getElementById("btn");

//1.2.gán sự kiện click cho btn, sử dụng function expression
// btn.onclick = function () {
//   alert("You clicked button");
// };

//1.3 dùng function declaration khai báo hàm,
//sau đó gán hàm đó cho sự kiện click
// function clickHandler() {
//   alert("You clicked button");
// }
// btn.onclick = clickHandler;

//1.4 hoặc dùng arrow function

btn.onclick = () => {
  alert("You clicked button");
};

//1.5 Ví dụ 2:
function mouseOver() {
  document.getElementById("message").textContent = "Mouse is over the button!";
}

function mouseOut() {
  document.getElementById("message").textContent = "Mouse left the button!";
}

function setup() {
  var button = document.getElementById("btn2");
  button.onmouseover = mouseOver;
  button.onmouseout = mouseOut;
}

// setup();
//Sự kiện onload của đối tượng window được kích hoạt khi toàn bộ
//trang web đã tải xong, bao gồm tất cả các tài nguyên như hình ảnh,
//script, và stylesheet.

// window.onload = setup;
