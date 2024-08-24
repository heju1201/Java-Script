// xác định phần tử cha
let parentElm = document.querySelector("#header");
console.log(parentElm);
// tạo phân tử con mới vd thẻ p
let p_eml = document.createElement("p");
// thêm nội dung vào thẻ p
p_eml.textContent = "á buồn ngủ quá đi thôi à";
//thêm style
p_eml.style.color = "red";
//thêm class cho thẻ p_elm
p_eml.setAttribute("Class", "doan_van");

/*
1. **Đối tượng có thể thêm**:
   - `appendChild` chỉ thêm được đối tượng `Node`.
   - `append` thêm được cả `Node` và chuỗi văn bản.
*/

// parentElm.appendChild(p_eml);
// parentElm.append(p_eml);
// sau khi có class mới được thêm
// chúng ta có thể CSS tùy bến cho chúng
// không thêm được văn bản
// parentElm.appendChild("lỗi rồi "); //TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
// parentElm.append("append không nỗi ");
/*
2. **Trả về giá trị**:
   - `appendChild` trả về phần tử vừa được thêm.
   - `append` không trả về giá trị.
*/
// console.log(parentElm.append(p_eml)); //undefined
// console.log(parentElm.appendChild(p_eml)); // trả về giá tri vừa thêm

/*
3. **Thêm nhiều phần tử**:
   - `appendChild` chỉ thêm được một phần tử mỗi lần gọi.
   - `append` có thể thêm nhiều phần tử hoặc chuỗi văn bản trong một lần gọi.
*/
// tạo thêm 1 phần tủ
let h3 = document.createElement("h3");
h3.textContent = "bắt đầu quá tải";
// parentElm.append(p_eml, h3, "đây là append");
// parentElm.appendChild(p_eml, h3, "đây là append"); // lỗi
parentElm.appendChild(p_eml);
parentElm.appendChild(h3);
// parentElm.appendChild("đây là append");

//Do appendChild có giá trị trả về nên:
// Ta có thể Thêm và ngay lập tức thao tác với phần tử
// Tạo phần tử mới
let btn = document.createElement("button");
btn.textContent = "Click me";
// Thêm phần tử mới vào một phần tử cha và nhận giá trị trả về
let addBtn = parentElm.appendChild(btn);
// gán sự kiện click cho phần tử vừa được thêm vào
addBtn.addEventListener("click", function () {
  alert("bạn đã click vào btn");
});
