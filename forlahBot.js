function sendResponse(){

    var inputValue  = document.querySelector("input").value;
    document.querySelector("#response").innerHTML = inputValue;
    document.querySelector(".main").style.display = "none"
    document.querySelector(".final").style.display = "flex"  
}
