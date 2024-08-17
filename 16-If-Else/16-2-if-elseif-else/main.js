let dtb = parseFloat(prompt("Please enter your score : "));
if (dtb <= 10 && dtb >= 8) {
  console.log(`Good`);
} else if (dtb < 8 && dtb >= 6.5) {
  console.log(`khá`);
} else if (dtb < 6.5 && dtb >= 5) {
  console.log(`average`);
} else if (dtb < 5 && dtb >= 0) {
  console.log(`Weak`);
} else {
  console.log(`You enter not number 0 then 10`);
}
