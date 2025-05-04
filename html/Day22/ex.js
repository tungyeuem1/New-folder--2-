// const btnElement = document.getElementById("btn")
// console.log(btn);
// btnElement.onclick = function () {
// console.log("xin chao")}
// btnElement.addEventListener("click",function(){
//     console.log("bonjour")

// })
// btnElement.addEventListener("click",function(){
//     console.log("konnichiwa")
//     console.log(event)
// })
const inputElement = document.getElementsByName("email")[0]
console.log(inputElement);
inputElement.onchange = function () {
    console.log(event);
    console.log("11")
}
const input = document.getElementsByName("email");
input.onchange = function () {
    console.log(event.target.value);
    console.log("oninput")
}