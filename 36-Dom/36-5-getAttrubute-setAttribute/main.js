//8.getAttribute
// Sử dụng querySelector để chọn thẻ a đầu tiên
const firstLink = document.querySelector("a");

// Kiểm tra xem có thẻ a được tìm thấy hay không
if (firstLink) {
  const linkHref = firstLink.getAttribute("href");
  console.log("Link của thẻ a đầu tiên :", linkHref);
} else {
  console.log("không tìm thấy thẻ a");
}

//9. setAttribute

// sử dụng querySelectorAll để chọn cách thẻ a trong ul
const links = document.querySelectorAll("ul a");

// cách 1
// for (let i = 0; i < links.length; i++) {
//   links[i].setAttribute("target", "_blank");
// }

links.forEach((a) => {
  a.setAttribute("target", "_blank");
});

const color = document.querySelector("#heading_title");
color.setAttribute("style", "color :blue");
