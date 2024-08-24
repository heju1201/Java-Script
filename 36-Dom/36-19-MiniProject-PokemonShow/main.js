// https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
//✔ 1. removeChild
//cú pháp: parentElement.removeChild(childElement)
//chọn phần tử cần xóa
// bài toán 1
const container = document.getElementById("container");
let baseURL = `https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/
`;
// const img = document.createElement("img");
// img.src = `${baseURL}1.png`;
// container.appendChild(img);
// Object.assign(container.style, {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// });
// Bài toán 2
// for (let i = 1; i <= 151; i++) {
//   const img = document.createElement("img");
//   const span = document.createElement("span");
//   img.src = `${baseURL}${i}.png`;
//   span.textContent = `#${i}`;
//   container.appendChild(img);
//   container.appendChild(span);
// }

// bài toán 3

for (let i = 1; i <= 151; i++) {
  const div = document.createElement("div");
  const parenDiv = container.appendChild(div);
  const img = document.createElement("img");
  const span = document.createElement("span");
  img.src = `${baseURL}${i}.png`;
  span.textContent = `#${i}`;
  parenDiv.appendChild(img);
  parenDiv.appendChild(span);
}
