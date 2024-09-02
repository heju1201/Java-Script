const form = document.querySelector("#form");
const name = document.querySelector("#username");
const message = document.querySelector("#message");
const ulList = document.querySelector("#list_item");

//1. ngăn submit mặc định của form
//2.khi nhấn submit thì thêm 1 li vào ul
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.textContent = name.value + ":" + message.value;
  ulList.appendChild(li);
  form.reset();
});

//3. Xóa phần tử li khi click vào, không dùng event delegation
//chọn tất cả thẻ li
// const listLi = document.querySelectorAll("li");
// for (let li of listLi) {
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }

// Vấn đề: khi thêm 1 li mới vào ul,
//thì li đó không có sự kiện click
//Xóa phần tử li khi click vào dùng event delegation

ulList.addEventListener("click", (e) => {
  const li = e.target;
  //   li.remove();
  //   check if the clicked card is "li"
  if (li.tagName === "LI") {
    li.remove();
  }
});
