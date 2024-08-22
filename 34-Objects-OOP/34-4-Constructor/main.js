/*
1. Ôn tập lại đối tượng (Literal syntax) đã học ở bài 34.1
Quay trở lại bài toán sinh viên, các sinh viên đều có điểm chung. 
Nếu tạo theo cách trên thì sẽ lặp code rất nhiều lần 
*/
const student = {
  // thuộc tính
  fullName: "Trần Như Nhộng",
  birthYear: 2005,
  address: {
    city: "Hà Nội",
    country: "Việt Nam",
  },
  scores: [8, 9, 10],
  // phương thức
  getAge: function () {
    return 2024 - this.birthYear;
  },

  diemTrungBinh: function () {
    // tính tổng điểm
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    // Trả về dtb
    return sumScores / 3;
  },
};

const student2 = {
  // thuộc tính
  fullName: "Trần Văn B",
  birthYear: 2004,
  address: {
    city: "Tuyên Quang",
    country: "Việt Nam",
  },
  scores: [7, 6, 5],
  // phương thức
  getAge: function () {
    return 2024 - this.birthYear;
  },

  diemTrungBinh: function () {
    // tính tổng điểm
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    // Trả về dtb
    return sumScores / 3;
  },
};

//2. Function() constructor : Hàm tạo - sử dụng để tạo khuôn mẫu (prototype)
// Viết hoa chữ cái đầu để phân biệt với các hàm thông thường
// Cách 1 : function expression ( ít dùng)
const SinhVien = function (fullName, ID, birthYear, homeTown) {
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;

  // phương thức
  this.showInfo = function () {
    return `${fullName}, ${ID}, ${homeTown}`;
  };
};
console.log(typeof SinhVien);

//// Cách 2: function declaration  (thường dùng hơn)
function Student(fullName, ID, birthYear, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // phương thức
  this.showInfo = function () {
    return `${fullName}, ${ID}, ${homeTown}`;
  };
}
// Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo Student
const sv1 = new Student("Tống Văn Thắng", "202001", 2003, "Tiên Phương");
const sv2 = new Student("Nguyễn Văn Hiếu", "203002", 2001, "Nghệ An");
//truy cập vào thuộc tính và phương thước của đối tượng
console.log(sv1);
console.log(sv1.fullName);
console.log(sv1["fullName"]);
console.log(sv2.fullName);
console.log(sv2.showInfo());

// Sv1, và sv2 có thể gọi là các đối tượng cụ thể, hoặc gọi là các instance (thể hiện)
let a = 1;
console.log(sv1 instanceof Student); // true
console.log(a instanceof Student); // false

// Thêm, sửa, xóa thuộc tính (đã học bài 34.4)
sv2.email = "aptech.learning.edu.vn";
console.log(sv2);
sv2.homeTown = "Thành Phố Vinh";
delete sv2.birthYear;
console.log(sv2);
