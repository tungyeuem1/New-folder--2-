// let a= prompt("moi nhap a")
// let b=prompt ("moi nhap b");
// let c=prompt ("moi nhap c");
function swamNumbers(a,b,c){
    if(a + b > c && a + c > b && b + c > a){
        return true;
    }else{
       return false;
    }
}   
console.log(swamNumbers(3,4,5));
console.log(swamNumbers(1,2,3));
console.log(swamNumbers(2,3,4));
console.log(swamNumbers(4,5,6));
console.log(swamNumbers(7,8,9));
