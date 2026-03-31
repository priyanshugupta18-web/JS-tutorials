
let btn = document.querySelector("#toggle-btn");
let body = document.querySelector("body");
let para = document.querySelector("#hidden");

handler1 = ()=>{
    if(body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "black";
    }
}

handler2 = () => {
    para.style.visibility = "visible";
}

btn.addEventListener("click", handler1);
btn.addEventListener("mouseover", handler2)
