function cleanFalsyValues(arr) {
    const result = arr.filter(item => Boolean(item));
    console.log(result);    
  }
  
 
  cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]); // Output: [1, "hello", 2, 3]
var line= "--------------------------"
console.log(line);

  function filterEvenNumbers(arr) {
    const result = arr.filter(item => item % 2 === 0);
    console.log(result);        
  }
  
  
  filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
  filterEvenNumbers([1, 3, 5, 7]); // Output: []
  filterEvenNumbers([]); // Output: []
  filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]
  var line= "--------------------------"
  console.log(line);
  

  function filterLongStrings(arr) {
        const result = arr.filter(item=> item.length > 5);
    
        console.log(result);    
  }
  
  // Test
  filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
  filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); // Output: ["hello world", "goodbye!!"]
  filterLongStrings(["hi", "bye", "yes"]); // Output: []
  var line= "--------------------------"
console.log(line);


function findMinMaxAverage(arr) {
   const max = Math.max(...arr);
    const min = Math.min(...arr);
    const maxIndex = arr.indexOf(max);
    const minIndex = arr.indexOf(min);
    const primeNumbers = arr.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
        
    });
    const primeAverage = primeNumbers.length > 0 ? (primeNumbers.reduce((acc, num) => acc + num, 0) / primeNumbers.length).toFixed(2) : 0;
    console.log({ max, maxIndex, min, minIndex, primeAverage });
    
  }
  
  // Test
  findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
  findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
  findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }

  console.log(line);


  function insertNumber(arr, num) {
  
    arr = arr.filter(item => typeof item === 'number' && !isNaN(item));
    if (typeof num !== 'number' || isNaN(num)) {
        console.log(arr.sort((a, b) => a - b));
        return;
    }
    arr.push(num);
    arr.sort((a, b) => a - b);
    console.log(arr); 
}

// Test
insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]  
console.log(line);
