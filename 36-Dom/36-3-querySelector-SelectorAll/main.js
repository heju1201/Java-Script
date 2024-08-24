// 6. querySelector
// chọn phần tử có id là "heading_title" và thay đổi nội dung của nó
let title = document.querySelector("#heading_title");
console.log(title);
title.innerHTML = "thay đổi querySelector";
// chọn phần tử đầu tiên có lớp là list thay đổi nội dung
let firstListItem = document.querySelector(".list");
// firstListItem.innerHTML = "Trang Chủ";

//Quan trọng, querySelector có thể chọn css kết hợp
//(xem lại series web.tuhoc.cc từ bài 27)

let firstLinkList = document.querySelector("ul a");
console.log(firstLinkList);

// Chọn phần tử input checkbox và đặt thuộc tính checked cho nó
let checkbox = document.querySelector("input");
checkbox.checked = true;

//querySelectorAll
let list_item = document.querySelectorAll("li");
console.log(list_item);

list_item[1].innerHTML = "Liên hệ vs chúng tôi";
