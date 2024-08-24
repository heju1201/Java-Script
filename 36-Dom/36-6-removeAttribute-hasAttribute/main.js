// Sử dụng querySelector để chọn phần tử đầu tiên có class là "list"
const item1 = document.querySelector(".list");

//10. hasAttribute
// Kiểm tra xem phần tử có thuộc tính class không ?
console.log(item1.hasAttribute("class"));
const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style"));

// 11.removeAttribute
// Loại bỏ 1 thuộc tính khỏi phần tử
item2.removeAttribute("style");

// Kiểm tra lại xem thuộc tính style đã bị loại bỏ hay chưa?
console.log(item2.hasAttribute("style"));

const listHref = document.querySelectorAll("ul a");
listHref.forEach((a) => {
  a.removeAttribute("href");
});
