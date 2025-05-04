const myArr = [
    [1, 2],
    [7, -1],
    [7, 8],
    [0, 6, [3, 4, 100]]
];

// let maxVal = -Infinity;

// for (let i = 0; i < myArr.length; i++) {
//     let subArr = myArr[i];

//     for (let j = 0; j < subArr.length; j++) {
//         let element = subArr[j];

//         if (Array.isArray(element)) {
//             // Nếu phần tử là mảng, tiếp tục duyệt mảng con
//             for (let k = 0; k < element.length; k++) {
//                 if (element[k] > maxVal) {
//                     maxVal = element[k];
//                 }
//             }
//         } else {
//             // Nếu phần tử là số, cập nhật maxVal nếu cần
//             if (element > maxVal) {
//                 maxVal = element;
//             }
//         }
//     }
// }

// console.log(maxVal); // Output: 100
