// var
console.log(c);
var c = 9;
// cách js hiểu
/* 
 var c;
 console.log(c);
 c =9;
 */

//  let
// console.log(a); // lỗi
// let a;

function vd() {
  if (true) {
    var y = 28;
    console.log(y);
  }
  console.log(y); // có thể truy cập y từ bên ngoài if block
}

// cách js hiểu
/* 
function vd() {
var y;
  if (true) {
     y = 28;
    console.log(y);
  }
  console.log(y); // có thể truy cập y từ bên ngoài if block
}

*/
