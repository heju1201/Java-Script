// bài 1 : Nhật năm sinh tính độ tuổi

// const dateN = new Date();
// function kiemTra(year) {
//   let y = Number(year);
//   let yearN = dateN.getFullYear();
//   if (!Number.isInteger(y) || y < 1970 || y >= yearN) {
//     return null;
//   } else {
//     return yearN - y;
//   }
// }
// let year = prompt("Nhập Năm sinh");
// while (true) {
//   let a = kiemTra(year);
//   if (a === null) {
//     alert(`Năm sinh không hợp lệ.
//       Năm sinh phải là số nguyên.
//       Lớn hơn 1970.
//       Không được vượt quá ${dateN.getFullYear()}`);
//     year = prompt("Nhập lại Năm sinh");
//   } else {
//     alert(`Tuổi của bạn là : ${a}`);
//     break;
//   }
// }

// -------------------------------------------------------------

// bài 2 : viết trương trình đếm nược thời gian theo tường giây
// function countDown(minutes) {
//   alert(`thời gian làm bài của bạn là : ${minutes} phút`);
//   let seconds = minutes * 60;
//   let countDownInterval = setInterval(function () {
//     let minutesLeft = Math.floor(seconds / 60);
//     let secondsLeft = seconds % 60;
//     let prefixSecondsFormat = secondsLeft < 10 ? "0" : "";
//     console.log(`${minutesLeft}:${prefixSecondsFormat}${secondsLeft}`);
//     if (seconds <= 0) {
//       clearInterval(countDownInterval);
//       alert("hết thời gian");
//     } else {
//       seconds--;
//     }
//   }, 1000);
// }
// let timeInput = Number(prompt("mời nhập thời gian làm bài"));
// countDown(timeInput);

// -------------------------------------------------------------

/*
Bài 3. Viết chương trình có tên timeSince, 
thông báo người dùng offline x phút ... 
ví dụ: bạn đang chat với bạn A, sau đó bạn A offline 
--> Yêu cầu: update hiển thị thời gian A offline 
'x giây trước' 'x phút trước', 'x ngày trước', 'x tháng trước', 'x năm trước'
*/
function timeSince(timestamp) {
  let now = new Date();
  console.log(`xem thử thời gian hiện tại : +${now.getTime()}`);
  let timeDifference = now - timestamp;
  let seconds = Math.floor(timeDifference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);

  if (years > 0) {
    return `Online ${years} năm trước `;
  } else if (months > 0) {
    return `Online ${months} tháng trước `;
  } else if (days > 0) {
    return `Online ${days} ngày trước `;
  } else if (hours > 0) {
    return `Online ${hours} giờ trước `;
  } else if (minutes > 0) {
    return `Online ${minutes} phút trước `;
  } else {
    return `Online ${seconds} giây trước `;
  }
}

let timeOffline = 1707704398964; //Thời điểm bạn A offline
console.log(timeSince(timeOffline));
