//36.7 - Dom - textContent, innerHTML, innerText
// chọn đếm phầm tử có id : demo
let elm = document.getElementById("demo");

// textContent
console.log("textContent : ");
console.log(elm.textContent);

// innerHTML
console.log("innerHTML : ");
console.log(elm.innerHTML);

// innerText
console.log("innerText : ");
console.log(elm.innerText);

// chọn đếm phầm tử có id : demo2
let elm2 = document.getElementById("demo2");
elm2.innerHTML = "<p><i>tự học</i></p>";
elm2.textContent = "<p><i>tự học</i></p>";
elm2.innerText = "<p><i>tự học</i></p>";
