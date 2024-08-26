const listBtn = document.querySelectorAll(".btn");
function randomColor() {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  return `rgb(${a},${b},${c})`;
}
// making 1
// for (let i = 0; i < listBtn.length; i++) {
//   listBtn[i].addEventListener("click", () => {
//     if (listBtn[i] instanceof HTMLElement) {
//       let rgb = randomColor();
//       listBtn[i].style.backgroundColor = rgb;
//       listBtn[i].textContent = rgb;
//     }
//   });
// }
// making 2
// for (let btn of listBtn) {
//   if (btn instanceof HTMLElement) {
//     btn.addEventListener("click", () => {
//       let rgb = randomColor();
//       btn.style.backgroundColor = rgb;
//       btn.textContent = rgb;
//     });
//   }
// }

const listH1 = document.querySelectorAll(".title");
// for (let h of listH1) {
//   if (h instanceof HTMLElement) {
//     h.addEventListener("click", () => {
//       let rgb = randomColor();
//       h.style.backgroundColor = rgb;
//       h.textContent = rgb;
//     });
//   }
// }
//Dễ nhân thấy rằng, chúng ta đã viết 2 đoạn code tương tự nhau
//để thay đổi màu nền và màu chữ của button và title.
//Để giảm sự lặp lại, chúng ta sẽ viết 1 hàm, sử dụng từ khóa this
//để tham chiếu đến phần tử đang được click.
function changeColor() {
  this.style.backgroundColor = randomColor();
  this.textContent = randomColor();
  this.style.color = randomColor();
}
// button
for (let btn of listBtn) {
  btn.addEventListener("click", changeColor);
}

//h1
for (let h of listH1) {
  h.addEventListener("click", changeColor);
}
