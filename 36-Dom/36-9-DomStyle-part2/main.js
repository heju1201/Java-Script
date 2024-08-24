let buttons = document.querySelectorAll(".btn");
for (let btn of buttons) {
  if (btn instanceof HTMLElement) {
    btn.style.backgroundColor = "blue";
    btn.innerHTML = "Click Me";
    btn.style.fontSize = "2dm";
    btn.style.color = "black";
  }
}
