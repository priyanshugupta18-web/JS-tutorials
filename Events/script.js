
let btn = document.querySelector("#toggle-btn");
let body = document.querySelector("body");

handler = ()=>{
    if(body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "black";
    }
}
btn.addEventListener("click", handler);
