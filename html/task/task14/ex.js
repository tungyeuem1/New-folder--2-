function findMaxNumber(a, b, c) {
    let max = a; 
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    console.log("Số lớn nhất là:", max);
}
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));
let c = parseFloat(prompt("Nhập số c:"));
findMaxNumber(a, b, c);
