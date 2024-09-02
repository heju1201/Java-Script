const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const step = document.querySelectorAll(".step");
const progress = document.querySelector("#progress");

let currentActive = 1;
next.addEventListener("click", () => {
  changeStep(1);
});
prev.addEventListener("click", () => {
  changeStep(-1);
});
function changeStep(step) {
  currentActive += step;
  update();
}
function update() {
  step.forEach((step, idx) => {
    if (idx < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === step.length;
  progress.style.width = ((currentActive - 1) / (step.length - 1)) * 100 + "%";
}
