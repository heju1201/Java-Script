let choose = Number(
  prompt(
    `
chọn cách tìm kiếm :
    1.Tìm kiếm theo tên                             
    2.Tìm kiếm theo nhà xuất bản
    3.Tìm kiếm theo tác giả
    4.Tìm kiếm theo tiêu đề
`
  )
);
switch (choose) {
  case 1:
    alert("bạn chọn tìm theo tên");
    break;
  case 2:
    alert("bạn chọn tìm theo nhà xuất bản");
    break;
  case 3:
    alert("bạn chọn tìm theo tác giả");
    break;
  case 4:
    alert("bạn chọn tìm theo tiêu đề");
    break;
  default:
    alert("không hợp lệ");
}
