const inp = document.querySelector("#inp");
inp.addEventListener("keydown", () => {
  console.log("KeyDown!");
});
inp.addEventListener("keyup", () => {
  console.log("keyup!");
});

// event object
// inp.addEventListener("keydown", (e) => {
//   console.log(e);
// });

inp.addEventListener("keydown", (e) => {
  console.log(e);
  console.log(e.code);
});

//Ví dụ, nếu người dùng bấm phím r
//thì thay đổi màu nền của trang web.
// document.addEventListener("keydown", (e) => {
//   if (e.key === "r") {
//     document.body.style.backgroundColor = "blue";
//   }
// });

// or

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    document.body.style.backgroundColor = "blue";
  }
});
