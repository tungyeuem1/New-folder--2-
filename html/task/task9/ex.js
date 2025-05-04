let a=3;
let b= 5;
function swamNumbers(a,b){
    a=a+b;
    b=a-b;  
    a=a-b;
   console.log(a,b);
}
swamNumbers(a,b); 