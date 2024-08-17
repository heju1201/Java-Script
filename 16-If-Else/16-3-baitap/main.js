// bài 1 : tìm x,y khi biết tổng hiệu
// let t = Number(prompt("Nhập tổng")),
//   h = Number(prompt("Nhập hiệu")),
//   x = (t + h) / 2,
//   y = x - h;
// console.log(`giá trị x cần tìm là ${x}`);
// console.log(`giá trị y cần tìm là ${y}`);

// bài 2 viết chương trình nhập chiều cao cân nặng tính BIM và xuất ra thông báo
// let hightValue = Number(prompt("bạn hãy nhập chiều cao : "));
// let weightValue = Number(prompt("bạn hãy nhập cân nặng : "));
// let bmi = weightValue / Math.pow(hightValue, 2);
// console.log(bmi);
// if (bmi < 15) {
//   console.log("too skinny");
// } else if (bmi >= 15 && bmi <= 16) {
//   console.log("skinny body");
// } else if (bmi >= 16 && bmi <= 18.5) {
//   console.log("skinny ");
// } else if (bmi >= 18.5 && bmi <= 25) {
//   console.log("normal body");
// } else if (bmi >= 25 && bmi <= 30) {
//   console.log("slightly fat");
// } else if (bmi >= 30 && bmi <= 35) {
//   console.log("fat body");
// } else if (bmi >= 35) {
//   console.log("overweight");
// } else {
//   console.log("wrong input");
// }

// bài 3 : nhập 1 năm dương lịch, kiểm tra năm đó phải năm nhuận hạy không
// let year = Number(prompt("Enter Year : "));
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("leap year");
// } else {
//   console.log("normal year");
// }

// bài 4 : nhập năm 1 -> 12 cho biết bao nhiêu ngày
let month = Number(prompt("Enter month : "));
if (!isNaN(month) && month >= 1 && month <= 12) {
  if (month === 2) {
    let year = Number(prompt("Enter Year : "));
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`month ${month} has 29 days`);
    } else {
      console.log(`month ${month} has 28 days`);
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(`month ${month} has 30 days`);
  } else {
    console.log(`month ${month} has 31 days`);
  }
} else {
  console.log(`loi`);
}

// bài 5 : giả phương trình bậc 2
// let a = Number(prompt("Enter a :")),
//   b = Number(prompt("Enter b :")),
//   c = Number(prompt("Enter c :")),
//   dental = Math.pow(b, 2) - 4 * a * c;
// if (dental < 0) {
//   console.log(
//     `a = ${a}, b = ${b}, c = ${c} có dental = ${dental} thì phương trình vô nghiệm`
//   );
// } else if (dental > 0) {
//   let x1 = ((-b + Math.sqrt(dental)) / 2) * a;
//   let x2 = ((-b - Math.sqrt(dental)) / 2) * a;
//   console.log(
//     `a = ${a}, b = ${b}, c = ${c} có dental = ${dental} thì phương trình có 2 nghiệm x1 = ${x1}, x2 = ${x2}`
//   );
// } else {
//   let x = -(b / (2 * a));
//   console.log(
//     `a = ${a}, b = ${b}, c = ${c} có dental = ${dental} thì phương trình có 1 nghiệm kép x = ${x}`
//   );
// }
