//change event: sự kiện xảy ra khi giá trị thay đổi và mất focus
const inpName = document.querySelector("#name");
const h = document.querySelector("#hi");
// inpName.addEventListener("change", function (e) {
//   console.log(e.target.value);
// });

//input event: Đây là một sự kiện mà trình duyệt
// kích hoạt khi người dùng thực hiện bất
//kỳ hành động nhập liệu nào trên một phần tử HTML

inpName.addEventListener("input", function (e) {
  console.log(e.target.value);
  h.textContent = e.target.value;
});
