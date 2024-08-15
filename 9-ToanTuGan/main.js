// = : x=1 : Ý nghĩa là x = 1
// += : x += y : Ý nghĩa là x = x + y
// -= : x -= y : Ý nghĩa là x = x - y
// *= : x *= y : Ý nghĩa là x = x * y
// /= : x /= y : Ý nghĩa là x = x / y
// %= : x %= y : Ý nghĩa là x = x % y
console.log(`------------bài tập-------------`);
console.log(`a.`);
let a = 7;
console.log(`a = ${(a += 3)}`);
console.log(`b.`);
let b = 15;
console.log(`b = ${(b -= 6)}`);
console.log(`c.`);
let c = 5;
console.log(`c = ${(c *= 4)}`);
console.log(`d.`);
let d = 12;
console.log(`d = ${(d /= 2)}`);
console.log(`e.`);
let f = 2;
let e = 5;
console.log(`e = ${(e = e - (f + 1))}`);
