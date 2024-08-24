//36.9 Thao Tác với ClassList
/*
classList.add() thêm một lớp mới vào phần tử.
classList.remove() xoá một lớp khỏi phần tử.
classList.toggle() loại bỏ một lớp nếu nó đã tồn tại và thêm nó nếu chưa có.
classList.replace() thay thế một lớp cũ bằng một lớp mới.
classList.contains() kiểm tra xem phần tử có chứa một lớp cụ thể không.
*/
let element = document.getElementById("myElement");

//1. Thêm một lớp mới vào phần tử
element.classList.add("newClass");

//2. Kiểm tra xem phần tử có chứa lớp cụ thể không
console.log(element.classList.contains("newClass")); // true
console.log(element.classList.contains("newClass1")); // false

//3. Xoá một lớp khỏi phần tử
element.classList.remove("myClass");
// Kiểm tra xem phần tử có chứa lớp cụ thể không sau khi remove
console.log(element.classList.contains("newClass")); // false

// 4. Thay thế một lớp cũ bằng một lớp mới
element.classList.replace("newClass", "abc");

// 5.Nếu lớp đã tồn tại, loại bỏ nó, nếu không, thêm lớp vào phần tử
element.classList.toggle("toggleClass"); // thêm class toggleClass
element.classList.toggle("toggleClass"); // mất đi toggleClass
