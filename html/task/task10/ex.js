let a=3;
let b= 2;
let c =1;
function swamNumbers(a,b){
    if(a>b){
        a=a+b;
        b=a-b;  
        a=a-b;
    };
    if(a>c){
        a=a+c;
        c=a-c;  
        a=a-c;
    };
    if(b>c){
        b=b+c;
        c=b-c;  
        b=b-c;
    }

   console.log(a,b,c);
}
swamNumbers(a,b,c); 