const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // lấy tọa độ của button với viewport
    const buttonRect = e.target.getBoundingClientRect();
    console.log(buttonRect);

    // lấy tọa độ chuột click so với viewport
    const x = e.clientX;
    const y = e.clientY;
    console.log(x);
    console.log(y);

    // tính tọa độ chuột với button
    const xInside = x - buttonRect.left;
    const yInside = y - buttonRect.top;

    // thêm thẻ span , để thêm class circle
    const hinhTron = document.createElement("span");
    hinhTron.classList.add("circle");
    hinhTron.style.top = yInside + "px";
    hinhTron.style.left = xInside + "px";

    this.appendChild(hinhTron);

    //
    setTimeout(() => hinhTron.remove(), 500);
  });
});
// buttons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     //lấy tọa độ của button so với vp
//     const buttonRect = e.target.getBoundingClientRect();
//     console.log(buttonRect);

//     // Lấy tọa độ chuột click so với viewport
//     const x = e.clientX;
//     const y = e.clientY;
//     console.log(x, y);

//     // Tính tọa độ chuột click so với button
//     const xInside = x - buttonRect.left;
//     const yInside = y - buttonRect.top;

//     //Thêm thẻ span, để thêm class circle
//     const hinhTron = document.createElement("span");
//     hinhTron.classList.add("circle");
//     hinhTron.style.top = yInside + "px";
//     hinhTron.style.left = xInside + "px";

//     this.appendChild(hinhTron);
//   });
// });
