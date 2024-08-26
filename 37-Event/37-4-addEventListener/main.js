//37.4 - Event - addEventListener
//cú pháp: element.addEventListener(event, function, options)
//element: phần tử muốn thêm sự kiện
//event: tên sự kiện
//function: hàm xử lý sự kiện
//options: object, chứa các thuộc tính của sự kiện

// 1. Get Element
const btn = document.getElementById("btn3");

// 2. Add Event
// 2.1 Use function expression
btn.addEventListener("click", function () {
  alert("You Clicked button");
});

// 2.2 Use function declaration
function handleClick() {
  alert("You Clicked button function declaration");
}
btn.addEventListener("click", handleClick);

//  2.3 Use arrow function
btn.addEventListener("click", () => {
  alert("You clicked button arrow function");
});

//3. Lợi ích của addEventListener
//3.1 Có thể thêm nhiều sự kiện cho cùng 1 phần tử
//lấy phần tử
const btn4 = document.querySelector("#btn4");
// function Event
function handleClick1() {
  alert("This is Event 1");
}
function handleClick2() {
  alert("this is Event 2");
}
// add Event
// btn4.addEventListener("click", handleClick1);
// btn4.addEventListener("click", handleClick2);

// try it DOM Level 0 Event Handling
// không thể thêm cùng 1 sự kiện cho 1 phần tử
// btn4.onclick = handleClick1;
// btn4.onclick = handleClick2;
//Về cơ bản sự kiện 1 sẽ bị ghi đè bởi sự kiện 2

// 3.2 you can delete event
btn4.removeEventListener("click", handleClick1);

// 3.3 you can use event whit options
btn4.addEventListener("click", handleClick1, { once: true });
btn4.addEventListener("click", handleClick2);
