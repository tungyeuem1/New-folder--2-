function isSameSign(a, b) {
if (a<0&&b<0){
    return true;
}else if(a>0&&b>0){
    return true;}
    else if(a<0&&b>0){
        return false;}
        else if(a>0&&b<0){
            return false;}
            else if(a==0&&b==0){
                return true;}
                else if(a==0&&b!=0){
                    return false;}
                    else if(a!=0&&b==0){
                        return false;}
  }
  let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

console.log(isSameSign(a, b));
