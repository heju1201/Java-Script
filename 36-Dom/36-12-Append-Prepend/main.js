//36.12 : append, prepend :
//Phương thức dùng để thêm một hoặc nhiều phần tử con vào trong phần tử cha
//append: Thêm vào cuối
//prepend: Thêm vào đầu
// 🤞 Ví dụ 1:
//Bước 1. create element
//Cú pháp: document.createElement('element')    //element: tên thẻ cần tạo
const newImg = document.createElement("img");
console.log(newImg);
//kiểm tra toàn bộ thuộc tính và phương thức newImg
console.dir(newImg);

//Bước 2. set attribute
// newImg.setAttribute("src", "./assets/img/most_slide_1.jpg");
// newImg.setAttribute("src", "./assets/img/most_slide_2.jpg");
// cách 2
newImg.src = "./assets/img/most_slide_2.jpg";

//Bước 3. append: thêm vào 1 phần tử đã có sẵn
document.body.append(newImg); //thêm vào cuối phần tử cha(trong trường hợp này là body)
// set chiều dọng bằng 100% viewport width
newImg.style.width = "100%";

// 🤞 Ví dụ 2: Thêm thẻ p
const newText = document.createElement("p"); // bước 1 : tạo element
newText.textContent = "xin chào, em đang học JS"; // bước 2 : set attribute
document.body.append(newText);

// Ví dụ 3 : thêm vào 1 phần tử khác
const p = document.querySelector(".hero__desc");
p.append("bắt đầu buồn ngủ rồi đấy aaaaaaaa");

//Ví dụ 4: Thêm nhiều phần tử vào cuối phần tử cha
// Tạo các phần tử mới
let elm1 = document.createElement("p");
elm1.textContent = "buồn ngủ quá";

let elm2 = document.createElement("span");
elm2.textContent = "muốn ngủ quá";
const c = document.querySelector(".hero__heading");
c.append(elm1, elm2);

// Prepend
//Nếu muốn thêm vào đầu phần tử cha thì dùng prepend
c.prepend("Hi !");
console.log(c.prepend("Hi !"));
