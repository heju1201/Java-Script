let btn = document.querySelector("#btn");
// tự nghĩ
// function randomColor() {
//   let a, b, c;
//   for (let i = 0; i < 3; i++) {
//     if (i === 0) {
//       let random = parseInt(Math.random() * 256);
//       a = random;
//     }
//     if (i === 1) {
//       let random = Math.floor(Math.random() * 256);
//       b = random;
//     }
//     if (i === 2) {
//       let random = Math.floor(Math.random() * 256);
//       c = random;
//     }
//   }
//   return `rgb(${a},${b},${c})`;
// }

function randomColor() {
  let a = parseInt(Math.random() * 256),
    b = Math.floor(Math.random() * 256),
    c = Math.floor(Math.random() * 256);
  return `rgb(${a},${b},${c})`;
}

btn.addEventListener("click", () => {
  let h1 = document.querySelector("#title");
  let rgb = randomColor();
  h1.parentElement.style.backgroundColor = rgb;
  h1.textContent = rgb;
});
