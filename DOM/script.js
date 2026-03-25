// Question 1
/*
let h2 = document.querySelector("h2");

h2.innerText = h2.innerText + " from Apna College students"
*/

// Question 2
/*
document.querySelector("body").children[1].innerText = "I"
document.querySelector("body").children[2].innerText = "Love"
document.querySelector("body").children[3].innerText = "JS"

// alternate method:-

let divs = document.querySelectorAll(".box");

let idx = 1;
for(let div of divs) {
    div.innerText = `inner text ${idx}`;
    idx++;
}
*/

// Question 3
/*
let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body").prepend(btn);
*/

//Question 4
/*
let para = document.querySelector("p");
para.classList.add("anotherClass");
*/
