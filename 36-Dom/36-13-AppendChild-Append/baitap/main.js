let parentElm = document.querySelector("#container");

for (let i = 1; i <= 100; i++) {
  let btn = document.createElement("button");
  btn.textContent = "Button" + i;
  parentElm.appendChild(btn);
  if (i % 2 === 1) {
    btn.style.backgroundColor = "violet";
  } else {
    btn.style.backgroundColor = "red";
  }
}
