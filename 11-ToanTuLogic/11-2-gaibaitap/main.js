// --------------bài tập-------------
//Båi 04 : Tinh chu vi, di?n tich hinh tron
// Viét chutrng trinh nhüp våo tir bån phim bån kinh r Clia duüng tron , in ra ket quå
// a. Chuvi= ?
// b. Di?n tich = ?
// gợi ý
// chu vi=2*pi*r
// dientich = Pi*r*r
console.log("Båi 04 : Tính Chu vi, diện tích hình tròn");
let r = Number(prompt("nhập bám kính hình tròn :"));
let PI = Math.PI;
console.log(`Chu vi hình tròn có bán kính bằng r = ${r} : ${2 * PI * r}`);
console.log(`Diện tích hình tròn có bán kính bằng r = ${r} : ${PI * r * r}`);

// Cl Båi 05: Tinh chu vi, di?n tich hinh chi nh(it
//     I. Viåt churrng trinh nh(ip våo 2 sb thg•c (lu•mng a, b tir bån phim
//     a, b lå Chibu dåi vå chieu réng Clia hinh chü• nhét.
//     2. In ra mån hinh chu vi vå di?n tich Clia hinh chi? nh(it db.
//     gợi ý
//     diện tích s = a*b
//     chu vi p = (a+b)*2

console.log("Bài 5 : tính diện tích, chu vi hình chữ nhật");
let a = Number(prompt("Nhập chiều dài hình chữ nhật : "));
let b = Number(prompt("Nhập chiều rộng hình chữ nhật : "));
console.log(
  `Diện tích hình chữ nhật có chiều hài a = ${a}, b = ${b} : S = ${a * b}`
);
console.log(
  `Chu vi hình chữ nhật có chiều hài a = ${a}, b = ${b} : P = ${(a + b) * 2}`
);

//  Båi tüp 06: Viet chuvng trinh nh(ip våo diem ha mon toån, Vin, anh Clia
//     I hec sinh, tinh diem trung binh vå xuat ket quü låm trön 2 chü' so sau dau
//     phay

console.log(
  "Bài 6 : tính điểm trung bình 3 môn toán, văn, anh và làm trọn 2 chữ số sau dấy phẩy"
);
let t = Number(prompt(`Nhập điểm môn toán : `)),
  v = Number(prompt(`Nhập điểm môn văn : `)),
  an = Number(prompt(`Nhập điểm môn anh : `)),
  dtb = (t + v + an) / 3;

console.log(
  `Tổng điểm trung bình 3 môn Toán = ${t}, Văn = ${v}, Anh = ${an} : ${dtb}`
);
console.log(`Sau khi làm tròn 2 chữ số sau đấy phẩy : ${dtb.toFixed(2)}`);
