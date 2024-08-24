function updateClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  let timeString = `${hours}:${minutes}:${seconds}`;
  let clock = document.querySelector("#clock");
  clock.innerHTML = timeString;
}

setInterval(updateClock, 1000);
