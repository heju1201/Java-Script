// Định nghĩa lớp cơ sở School
class School {
  constructor(id, name, birthYear) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }
  //method class school
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}
// Student inheritance School
class Student extends School {
  constructor(id, name, birthYear, major) {
    super(id, name, birthYear);
    this.major = major;
  }
  //method of class Student
  study() {
    console.log(`${this.name} is studying ${this.major}`);
  }
}

// Object of class School
const s1 = new School(1, "thang", 2001);
console.log(s1.id);
console.log(s1.birthYear);
console.log(s1.calcAge(2024));

//Object of class Student
const st1 = new Student(2, "Hieu", 2001, "Computer Science");
// access of Object, Method School
console.log(st1.id);
console.log(st1.name);
console.log(st1.calcAge(2024));
// access of Object, Method Student
console.log(st1.major);
st1.study();
