// const aElement = document.getElementById("anchor")
// aElement.addEventListener("click",function(){
//     event.preventDefault()
//     console.log("hello")
// })
const email = document.getElementById("email")
const password = document.getElementById("password")
const loginForm = document.getElementById("loginForm")
const radio = document.getElementById("radio")
const cars = document.getElementById("cars")
const dk = document.getElementById("dk")
loginForm.addEventListener("submit",function(){
    event.preventDefault();
    //cach 1
    // const userInfor = {
    //     username:username.value,
    //     password:password.value,
    // }

    // cach 2 :
    const formData = new FormData(this)
    console.log(formData)
    const userInfor = Object.fromEntries(formData)
    console.log(userInfor)
   


    this.reset()
})