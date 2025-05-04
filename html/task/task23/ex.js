function reverseArr(arr) {
    if (!Array.isArray(arr)) {
      return "Dữ liệu không hợp lệ";
    }
    const filteredArr = arr.filter(item => Number.isInteger(item));
    const reversed = [];
    for (let i = filteredArr.length - 1; i >= 0; i--) {
      reversed.push(filteredArr[i]);
    }
  
    return reversed;
  }
  const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];
  const result = reverseArr(arrNumber);
  console.log(result); 
  