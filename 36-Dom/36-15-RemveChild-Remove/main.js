// 36.15 - Dom - removeChild & remove
//✔ 1. removeChild
//cú pháp: parentElement.removeChild(childElement)
//chọn phần tử cần xóa
const childElm = document.querySelector("#item2");
const ul = document.querySelector("#list");
// xóa phần tử
ul.removeChild(childElm); // xóa khỏi phần tử cha

//hoặc cách 2 ngắn gọn hơn, dùng kiến thức đã học để không cần chọn phần tử cha
//lấy phần tử cần xóa
const childElm2 = document.querySelector("#item3");
childElm2.parentElement.removeChild(childElm2);

//✔ 2. remove
//cú pháp: element.remove()
//chọn phần tử cần xóa
const childElm3 = document.querySelector("#item4");
childElm3.remove();
