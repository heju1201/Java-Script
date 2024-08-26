const form = document.getElementById("login");
const userName = document.querySelector("#name");
const ulList = document.querySelector("#list");
const pass = document.querySelector("#password");

//making 1
// let a = "";
// function addLi(string) {
//   a += `<li>${string}</li>`;
// }
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("form has been submit");
//   console.log(userName.value);
//   addLi(userName.value);
//   ulList.innerHTML = a;
// });

// making 2
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form has been submit");
  const newLi = document.createElement("li");
  newLi.innerText = userName.value;
  ulList.append(newLi);
  userName.value = "";
  pass.value = "";
});

//Prevent Event
let link = document.getElementById("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
});
