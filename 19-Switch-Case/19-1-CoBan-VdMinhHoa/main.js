let number = 17;
switch (number % 2) {
  case 0:
    console.log("even number");
    break;
  case 1:
    console.log("odd number");
    break;
  default:
    console.log("not is number");
}

let month = Number(prompt("nhập vào một tháng (1 - 12) : "));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("tháng có 31 ngày.");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("tháng có 30 ngày.");
    break;
  case 2:
    console.log("tháng có 28 hoặc 29 ngày");
    break;
  default:
    console.log("tháng không tồn tại");
    break;
}
