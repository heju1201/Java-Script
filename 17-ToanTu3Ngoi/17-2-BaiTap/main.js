// bài 1 : Viết chương trình nhập bào điểm trung bình và
// xuất ra kết quả xếp loại của học sinh theo tiêu chuẩn
// dùng toán từ 3 ngôi
let dtb = Number(prompt("Enter GPA"));

let xl =
  dtb >= 8 ? "good" : dtb >= 6.5 ? "rather" : dtb >= 5 ? "medium" : "weak";
console.log(xl);
