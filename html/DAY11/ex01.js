 //  arrr=["quynh","thanh","thao","thuy","thu"];
 // arrr.push("tung");

// console.log(arrr);

// const arr=[1,2,3,4,5,7,9,11,99,88];
// let arr1=[]
//     let arr2=[]
// for(let i=0;i<arr.length;i++){
//    if(arr[i]%2==0){
//        arr1.push(arr[i]);}
//        else{
//            arr2.push(arr[i]);
//        }
// }
// console.log(arr1);
// console.log(arr2);




// const arrr2 = ["hoang","thanh","thao",undefined,"thuy","",10,true];
// for(let j =0;j<arrr2.length;j++){
//     if(!arrr2[j]){
//         arrr2.splice(j,1);
//         j--;
//     }
// }
// console.log(arrr2);

// const arr2=["apple","banana","kiwi","orange","lemon","grape"];
// let maxLenght=arr2[0];
// let minLenght=arr2[0];
// for(let i=0;i<arr2.length;i++){
//     if(arr2[i].length>maxLenght.length){
//         maxLenght=arr2[i];
//     }
//     if(arr2[i].length<minLenght.length){
//         minLenght=arr2[i];}
// }console.log(maxLenght);
// console.log(minLenght);

const arr = [1, 2, 3, 4, 5, 7, 9, 11, 99, 88];
let maxNumber = arr[0];

for(let i=0;i<arr;i++){
  if(arr[i]>maxNumber){
    maxNumber=arr.unshift[i];
  }
}
console.log(maxNumber);