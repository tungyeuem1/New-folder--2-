// const animals = [
//     {id:1, name:"Chó", age:2},
//     {id:2, name:"Mèo", age:3},
//     {id:3, name:"Heo", age:4},
//     {id:4, name:"Gà", age:5}
// ];
// function printAnimals(animals){
//     if(!Array.isArray(animals)){
//       const result = animals.find((item,index,arr)=>{
//         return item.name ==="Heo";
//       }  );
//       return result;
    
//     }
//     return false;
// }
// function finIndexAnimals(animals){
//     return Array.isArray(animals)&&animals.findIndex((item)=>{return item.name==="Heo"});
    
// }
// console.log(printAnimals(animals));
// console.log(finIndexAnimals(animals));
const arr = [1,2,3,4,5,6,7,8,9,10];
const result = arr.filter((item,index,arr)=>item <5);
console.log(result); // [1,2,3,4]

const arr2 = [
    {id:1, name:"Dao anh tung", age:21},
    {id:2, name:"Dao anh hung", age:26},
    {id:3, name:"Dao anh dung", age:25},
    {id:4, name:"Dao anh quang1", age:14},
    {id:5, name:"Dao anh quang2", age:17},
    {id:6, name:"Dao anh quang3", age:19},
]
const result2 = arr2.filter((item,index,arr)=>item.age>=21);
console.log(result2); // [ { id: 2, name: 'Dao anh hung', age: 26 } ]