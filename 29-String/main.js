// 1.cách xuất chuỗi
//cách 1 xuất chuỗi
console.log("Hello Word"); // ' '
console.log("Hello Word");
console.log(`Hello Word`);
//cách 2 xuất chuỗi
let s1 = `hedede
hehehe`;
console.log(s1);
let s2 = "hehehe\nhehehe";
console.log(s2);

// 2. Index chuỗi : index bắt đầu từ 0
let ten = "hello";
console.log(ten[1]);

// 3. string length
let s3 = "abcde";
// kiểm tra chiều dài s3
console.log(s3.length);
// vd :
// let mess = prompt("enter string");
// if (mess.length <= 140) {
//   alert(`ban da nhap ${mess.length} ký tự`);
// } else {
//   alert(`bạn đã nhập quá ${mess.length - 140}`);
// }

// 4.string.slice()
let s4 = "012345678";
let s5 = s4.slice(3, 8);
let s6 = s4.slice(4);
console.log(`Chuỗi sau cắt : ${s5}`); // 34567
console.log(`Chuỗi sau cắt : ${s6}`); // 45678
console.log(`Chuỗi sau cắt : ${s4.slice(6, 1)}`); // ""
console.log(`Chuỗi sau cắt : ${s4.slice(-6, -2)}`); // "3456"

//5. string.substring()
let s7 = "012345678";
console.log(`Chuỗi sau cắt : ${s7.substring(1, 6)}`); //12345
console.log(`Chuỗi sau cắt : ${s7.substring(6, 1)}`); //12345
console.log(`Chuỗi sau cắt : ${s7.substring(-6, -1)}`); //"" vì : substring sẽ chuyển tham số âm thành 0 : s7.substring(0,0)
console.log(`Chuỗi sau cắt : ${s7.substring(4, -5)}`); //0123

// 6. trim()
let s8 = "      hello      word       ";
console.log(s8.length);
console.log(s8.trim());
console.log(s8.trim().length);
// 6.1 trimEnd()
console.log(s8.length);
console.log(s8.trimEnd());
console.log(s8.trimEnd().length);
// 6.2 trimStart()
console.log(s8.length);
console.log(s8.trimStart());
console.log(s8.trimStart().length);

// 7. concat() : nỗi chuỗi
let firstName = "Lê";
let lastName = "Hiếu";
console.log(firstName.concat(" ", lastName)); // Lê Hiếu

// 8. toUpperCase() : chuyển toàn bộ sang viết hoa
let s9 = "Abcd đ dkaka adasAA Â sadas";
console.log(s9.toLocaleUpperCase());

// 9. toLowerCase() : chuyển sang thường
let s10 = "SDJSADOJA Đ Â Ô SADSA KK ADSA";
console.log(s10.toLocaleLowerCase());

// 10. charAt(index) : trả về chuỗi ở vị trí index được chuyền vào
let s11 = "hello";
console.log(s11.charAt("3"));

// 11. replace() : thay thế giá trị
let s12 = "tôi đang đang đang đi ngủ";
console.log(s12.replace("đang", "đi"));
console.log(s12.replace(/đang/g, "đi"));

// 12. repeat() : lặp lại chuỗi
let s13 = "ha ";
console.log(s13.repeat(5));

// 13. indexOf() tìm kiếm xuất hiện là đầu tiên nếu khôn có trả về -1
let s14 = "abcd abcd abcd";
console.log(s14.indexOf("c")); // 2 : vì nó lằm ở vị trí thứ 2 đếm từ 0
console.log(s14.indexOf("c", 3)); // 7 : c tại đểm 7 thì tìm bắt đầu từ vị trí 3
console.log(s14.indexOf("f")); // -1 : không tìm thấy

// 14. lastIndexOf() tìm kiếm giá trị xất hiện cuối cùng
let s15 = "abcd abcd abcd";
console.log(s15.lastIndexOf("c")); // 12: vì c xuất hiện lần cuối cùng ở vị trí số 12
console.log(s15.lastIndexOf("c", 8)); // 7: tìm kiếm từ 0 đến 8
console.log(s15.lastIndexOf("d", 2)); // -1 : không tìm thấy d từ vị trí 2 đồ về

// 15. includes() : tìm kiếm có trong chuỗi hay không trả về true nếu có, false nếu không vó
let s16 = "abcd abcd abcd";
console.log(s16.includes("c")); // true : vì nó có trong chuỗi
console.log(s16.includes("c", 12)); // true : vì vị trí  12 có c
console.log(s16.includes("c", 11)); // false : vị trí 11 k có c
console.log(s16.includes("f")); // false : không có trong chuỗi

// 16. startsWith() kiểm tra xem chuỗi gốc có bắt đầu bằng search không
//     đúng trả về true, sai trả về false
let s17 = "abcd abcd abcd";
console.log(s17.startsWith("a")); // true
console.log(s17.startsWith("b")); // false
console.log(s17.startsWith("bc", 1)); // true

// 17. endWith() kiểm tra xem chuỗi gốc có kết thúc bằng search không
//     đúng trả về true, sai trả về false
let s18 = "01234567890";
console.log(s18.endsWith("0")); //true
console.log(s18.endsWith("8", 9)); //true
console.log(s18.endsWith("4")); //false

// 18/ split()
let s19 = "apple,orange,banana,grape";
console.log(s19.split(",")); // trả về mảng : ['apple', 'orange', 'banana', 'grape']
console.log(s19.split(",", 3)); // trả về mảng : ['apple', 'orange', 'banana']
// nếu nhập "" sẽ tác từng phần từ thành mảng
let s20 = "1234 adsa 523";
console.log(s20.split("")); // ['1', '2', '3', '4', ' ', 'a', 'd', 's', 'a', ' ', '5', '2', '3']
console.log(s20.split("", 6)); //  ['1', '2', '3', '4', ' ', 'a']
