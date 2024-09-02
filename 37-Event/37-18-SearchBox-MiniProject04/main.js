let search = document.querySelector(".search");
let btn = document.querySelector(".btn");
let currentActive = 1;
let input = document.querySelector(".input");

// tự nghĩ
// btn.addEventListener("click", () => {
//   update();
//   input.focus();
//   input.value = "";
// });

// function update() {
//   if (currentActive === 1) {
//     search.classList.add("active");
//     currentActive++;
//   } else {
//     search.classList.remove("active");

//     currentActive--;
//   }
// }

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  input.value = "";
});
