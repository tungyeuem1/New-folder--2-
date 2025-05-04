function checkSymmetricalArr(arr) {
    if (!Array.isArray(arr)) {
      return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 1) {
      return "Mảng có 1 phần tử, không kiểm tra được";
    }
  
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  console.log(checkSymmetricalArr([1, 2, 3, 2, 1])); 
console.log(checkSymmetricalArr([1, 2, 3, 4, 5]));
console.log(checkSymmetricalArr([1]));            
console.log(checkSymmetricalArr("abc"));           
