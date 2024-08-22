// 1. Object.keys(obj)
// Phương thức này trả về một mảng chứa tất cả các key (tên thuộc tính) của đối tượng.
let person = { name: "buồn ngủ", age: 27 };
let keys = Object.keys(person);
console.log(keys); //["Buồn ngủ", 27]

//2. Object.values(obj);
// Phương thức này trả về một mảng chứa tất cả các giá trị của đối tượng.
let person2 = { name: "Mắt giặt", age: 18 };
let values = Object.values(person2);
console.log(values); // ["Mắt giặt", 18]

//3. Object.entries(obj);
// Phương thức này trả về một mảng chứa các cặp [khóa, giá trị] của đối tượng dưới dạng mảng con.
let person3 = { name: "Mắt giặt Giặt", age: 25 };
let entries = Object.entries(person3);
console.log(entries); // [["name","Mắt giặt Giặt"], ["age", 18]]

// 4. Object.assign(target, source);
//sử dụng để sao chép các thuộc tính từ một hoặc
//nhiều đối tượng nguồn (source) vào một đối tượng đích (target).
const target = {};
const source1 = { a: 1 };
const source2 = { b: 2 };
Object.assign(target, source1, source2);
console.log(target); // {a:1, b:2}
// có thể dùng toán tử (spread(...))để sao chéo thuộc tính

const target2 = { ...source1, ...source2 };
console.log(target2); // {a:1, b:2}

// 5.  Object.hasOwnProperty(prop);
// Phương thức này kiểm tra xem đối tượng có một thuộc tính nào
// đó hay không và trả về true nếu có.
let person4 = { name: "buồn ngủ", age: 27 };
console.log(person4.hasOwnProperty("name"));
console.log(person4.hasOwnProperty("job"));

// 6. Object.freeze(obj);
// Phương thức này đóng băng đối tượng, làm cho nó không thể thêm, sửa, xóa.
let person5 = { name: "buồn ngủ", age: 27 };
Object.freeze(person5);
person.age = 25; // không sửa được
person5.email = "abcd@gmail.com"; //không thêm được
delete person5.age; //không xóa được
console.log(person5); //{name : "buồn ngủ", age : 27}

// 7. Object.seal(obj)
// Seal the object
//(Ngăn 0 cho thêm, xóa thuộc tính, chỉ cho phép sửa giá trị )
let person6 = {
  name: "John",
  age: 30,
};

Object.seal(person6);
person6.location = "New York"; // thao tác này sẽ bị bỏ qua
delete person6.age; // thao tác này sẽ bị bỏ qua
person6.age = 45; // thành công
console.log(person6); // {name:"John", age:45}
