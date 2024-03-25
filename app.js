let inputbox= document.getElementById("input-box");
let resultbox= document.getElementById("result-box");

let changecolor =()=>{
    input = inputbox.value;
    resultbox.style.backgroundColor=input;
};

inputbox.addEventListener("input", changecolor);
window.addEventListener("load", changecolor)