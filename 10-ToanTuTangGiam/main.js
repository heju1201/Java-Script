// ++ | VD : a=1,a++ | a = a + 1 | KQ : a = 2 | YN : tăng giá trị lên 1 => Postfix
// -- | VD : a=1,a-- | a = a - 1 | KQ : a = 0 | YN : giảm giá trị lên 1 => Postfix
// ++ | VD : a=1,++a | a = a + 1 | KQ : a = 2 | YN : tăng giá trị lên 1 => Prefix
// -- | VD : a=1,--a | a = a - 1 | KQ : a = 0 | YN : giảm giá trị lên 1 => Prefix

// thứ tự ưu tiên ;
// 1. prefix
// 2. các phép toán còn lại
// 3. gán giá trị cho biến ở bên trái dấu bằng
// 4. Postfix

let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(x); // 2
console.log(y); // 3
console.log(z); // -1
