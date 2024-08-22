class School {
  constructor(id, name, birthYear, score) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
    this._score = score;
    //Thêm dấu _ vào trước tên thuộc tính để thể hiện nó ở trạng thái protected,
    //và không nên truy cập, sửa đổi trực tiếp từ bên ngoài
  }
  //method
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
  get score() {
    return this._score;
  }
  set score(score) {
    if (score >= 0 && score <= 100) {
      this._score = score;
    } else {
      console.log("invalid score");
    }
  }
}

// Tạo đối tượng
const john = new School(1, "john", 2005, 95);
console.log(john.id);
console.log(john.birthYear);
console.log(john.name);
console.log(john._score);
console.log(john.calcAge(2024));
// getter
console.log(john.score);
// setter
john.score = 75;
console.log(john.score);
