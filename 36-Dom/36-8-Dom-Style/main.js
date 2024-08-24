let heading = document.querySelector("#heading_title");
// thay đổi giao diện h1
// thuộc tính style trong js này gọi là camelCase
// heading.style.backgroundColor = "cyan";
// heading.style.fontSize = "46px";
// heading.style.color = "red";
// cách viết gọn gàng
Object.assign(heading.style, {
  backgroundColor: "cyan",
  fontSize: "46px",
  color: "red",
});
