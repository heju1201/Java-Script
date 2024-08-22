//Ở bài học trước chúng ta đã học về prototype ( nguyên mẫu)
function Student(fullName, ID, birthYear, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  //phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}

// Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo Student
const sv1 = new Student("Nguyễn Văn A", "2024001", 2005, "Nam Định");
const sv2 = new Student("Nguyễn Văn B", "2024002", 2004, "Hà Nội");
console.log(sv1);
console.log(sv1.showInfo);

// 2. Khai báo ES6 classes
//2.1 Class expression (ít dùng hơn) : Đoạn code này mình đã sửa lại đầy đủ
// Về cơ bản nó chỉ khác phần đầu khai báo như đã nói ở clip
// Phần thân thì giống hệt khai báo Class decoration
const SinhVienEx = class {
  //   constructor(fullName, ID, birthYear, homeTown) {
  //     // thuộc tính
  //     this.fullName = fullName;
  //     this.ID = ID;
  //     this.birthYear = birthYear;
  //     this.homeTown = homeTown;
  //   }
  //   // Phương thức
  //   showInfo() {
  //     return `${this.fullName} ${this.ID} ${this.homeTown}`;
  //   }
};

// Ví dụ đầy đủ nếu dùng Class expression

//2.2 Class decoration (thường dùng vì nó ngắn gọn hơn)
class SinhVien {
  // constructor method(phương thức được JS xây dựng sẵn cho class)
  constructor(fullName, ID, birthYear, homeTown) {
    // thuộc tính
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  // Các phương thức, khai báo trong thân class, khai báo ngoài constructor
  // không cần function keyword
  showInfo() {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  }

  // phương thức có tham số
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

// Tạo đối tượng class
const stu3 = new SinhVien("Chưa buồn ngủ", 12345, 1988, "vô gia cư");
console.log(stu3);
console.log(stu3.showInfo());
// Và nếu kiểm tra nguyên mẫu của đối tượng stu3, chính là class SinhVien
console.log(Object.getPrototypeOf(stu3));
console.log(Object.getPrototypeOf(stu3) === SinhVien.prototype);

// 3. Thêm phương thức vào class SinhVien thủ công (sau khi có class)
// SinhVien.prototype.calcAge = function (currentYear) {
//   return currentYear - this.birthYear;
// };
console.log(stu3.calcAge(2024));
console.log(stu3);
