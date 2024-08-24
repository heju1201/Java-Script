console.log("getElementsByLagName: ");
// 3. getElementsByTagName
let li_item = document.getElementsByTagName("li");
console.log(li_item); // trả về mảng có chứa các phần tử li
// Chúng ta có thể kiểm tra mảng đó
console.log("Số pt trong mảng li_item: " + li_item.length); // 3
// truy xuất và thay đổi phần tử theo vị trí index
li_item[1].innerHTML = "Phần từ li đc thay đổi TagName";

// 4. getElementsByClassName
console.log("getElementsByClassName");

li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);
li_class_item[2].innerHTML = "Phần từ li đc thay đổi ClassName";

// 5. getElementById
let el = document.getElementById("a_hp"); // trả về null khi không tháy id
console.log(el);
// thay đổi text
el.innerHTML = "Home Page đã có Id";
