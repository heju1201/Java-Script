const child = document.getElementById("child");
const parent = document.getElementById("parent");
const grandparent = document.getElementById("grandparent");

// child.addEventListener("click", () => {
//   console.log("click child");
// });

// parent.addEventListener("click", () => {
//   console.log("click parent");
// });

// grandparent.addEventListener("click", () => {
//   console.log("click grandparent");
// });
//Tuy chúng ta chỉ click vào thẻ con,
//nhưng do các thẻ cha của nó cũng có sự kiện click nên khi click vào thẻ con thì sẽ lan ra các thẻ cha của nó
//Đây được gọi là Event Bubbling

//Để ngăn event bubbling, chúng ta sử dụng phương thức stopPropagation()
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click child");
});

parent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click parent");
});

grandparent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click grandparent");
});
