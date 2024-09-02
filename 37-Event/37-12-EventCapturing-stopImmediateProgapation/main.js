const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener(
//   "click",
//   () => {
//     console.log("click child");
//   },
//   // { capture: true }
//   // or
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("click parent");
//   },
//   // { capture: true }
//   // or
//   true
// );

// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("click grandparent");
//   },
//   // { capture: true }
//   // or
//   true
// );

//so sánh phương thức stopPropagation và stopImmediatePropagation
//1. dùng stopPropagation(); chỉ ngăn chặn sự kiện lan truyền từ con lên cha, không ngăn chặn sự kiện của cùng 1 element
// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("clicked child 1");
// });
// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("clicked child 2");
// });

child.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("clicked child 1");
});
child.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("clicked child 2");
});
