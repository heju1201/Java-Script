// bài 1 Nhập một chuỗi từ bàn phím,
// 1. đếm xem có bao nhiêu ký tự thường
// 2. bao nhiêu in hoa
// 3. bao nhiêu số
// 4. bao nhiêu spaces
// let s1 = "123AbcDD   sadsa 3213 SDSA";
// function kiemTraChuoi(s) {
//   let tongT = 0;
//   let tongH = 0;
//   let tongS = 0;
//   let tongSp = 0;
//   for (let i = 0; i <= s.length; i++) {
//     if (s[i] >= "a" && s[i] <= "z") {
//       tongT += 1;
//     } else if (s[i] >= "A" && s[i] <= "Z") {
//       tongH += 1;
//     } else if (s[i] >= "0" && s[i] <= "9") {
//       tongS += 1;
//     } else if (s[i] === " ") {
//       tongSp += 1;
//     }
//   }
//   console.log(`Số ký tự thường : ${tongT}`);
//   console.log(`Số ký tự hoa : ${tongH}`);
//   console.log(`Số ký tự số : ${tongS}`);
//   console.log(`Số ký tự khảng trắng : ${tongSp}`);
// }

// kiemTraChuoi(s1);

//bài 2 : kiểm tra mật khẩu và nhập lại nếu sai
// function kiemTraChuoi2(s) {
//   let tongT = 0;
//   let tongH = 0;
//   let tongS = 0;
//   let tongSp = 0;
//   for (let i = 0; i <= s.length; i++) {
//     if (s[i] >= "a" && s[i] <= "z") {
//       tongT += 1;
//     } else if (s[i] >= "A" && s[i] <= "Z") {
//       tongH += 1;
//     } else if (s[i] >= "0" && s[i] <= "9") {
//       tongS += 1;
//     } else if (s[i] === " ") {
//       tongSp += 1;
//     }
//   }
//   if (s.length < 6) {
//     console.log("mật khẩu ít nhất phải có 6 ký tự");
//   } else if (tongH < 1) {
//     console.log("chứa ít nhất 1 chữ cái hoa");
//   } else if (tongT < 1) {
//     console.log("chứa ít nhất 1 chữ cái thường");
//   } else if (tongS < 1) {
//     console.log("chứa ít nhất 1 chữ số");
//   } else if (tongSp > 0) {
//     console.log("không được chứa khảng trắng");
//   } else {
//     return s;
//   }
// }

// while (true) {
//   let nhap = prompt("nhật mật khẩu");
//   let pass = kiemTraChuoi2(nhap);
//   while (pass === undefined) {
//     nhap = prompt("nhật mật khẩu");
//     pass = kiemTraChuoi2(nhap);
//   }
//   alert(`nhập mật khẩu thành công.
// hãy xác nhận lại mật khẩu : ${pass}`);
//   let count = 1;
//   let cPass = prompt("nhật lại mật khẩu");
//   do {
//     if (cPass !== pass) {
//       count++;
//       alert("mật khẩu sai mời nhập lại");
//       cPass = prompt("nhật lại mật khẩu");
//     } else if (cPass === pass) {
//       alert("xác nhận mật khẩu thành công");
//       break;
//     }
//   } while (count <= 5);
//   if (count === 5) {
//     alert("bạn đã nhập sai quá 5 lần,thoát chương trình");
//     break;
//   }
// }

// bài 3 : viết chương trình mã hóa chuỗi
// function maHoa(s) {
//   const a = "abcdefghijklmnopqrstuvwxyz";
//   const b = "zxcvbnmasdfghjklqwertyuiop";
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i].toLowerCase(); // chuyển đôi sang chữ thường để phù hợp vs bảng mã
//     // kiểm tra xem ký tự nhập vào có trong bảng mã hay k
//     if (a.includes(char)) {
//       //thực hiện chuyển đổi
//       // kiểm tra vị trí index của char trong a
//       let index = a.indexOf(char);
//       result += b[index];
//     } else {
//       result += char;
//     }
//   }
//   return result;
// }

// let str = prompt("nhập đoạn tin nhắn cần mã hóa : ");
// let kq = maHoa(str);
// alert(`đoạn tin nhắn đã được mã hóa là : ${kq}`);

// bài 4. const a = "tôi chăm học tôi chịu khó tôi đẹp zai"
// đếm từ tôi trong string a trên

// function dem(str, t) {
//   let array = str.split(" ");
//   let cnt = 0;
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === t) {
//       cnt += 1;
//     }
//   }
//   return cnt;
// }
// const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
// let t = "tôi";
// console.log(`số lần xuất hiện từ ${t} trong chuỗi là : ${dem(a, t)}`);
// cách 2:
// const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
// const targetWord = "tôi";
// let count = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a.slice(i, i + targetWord.length) === targetWord) {
//     count++;
//   }
// }

alert(`Số lần xuất hiện của từ ${targetWord} trong chuỗi là: ${count}`);

// bài 5 : viết chương trình tách số và chữ ,rồi nhập vào 2 chuỗi khác

function tach(a) {
  let stringC = "";
  let stringS = "";
  for (let i = 0; i < a.length; i++) {
    let char = a[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      stringC += char;
    } else if (char >= "0" && char <= "9") {
      stringS += char;
    }
  }
  return { stringC, stringS };
}

let str = prompt("Nhập chuỗi");
let t = tach(str);
alert(`Chuỗi chữ : ${t.stringC}
  Chuỗi số : ${t.stringS}`);
