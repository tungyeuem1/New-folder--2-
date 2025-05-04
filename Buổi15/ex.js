// const animals =["dog", "cat", "fish", "bird", "lizard"];
//             animals.forEach((item,index) => {
//                 console.log(item);
//                 console.log(index); 
//                 return"hello";
//        
// const result= animals.forEach((item,index) => {
//     console.log(item);
//     console.log(index); 
//     return"hello";
// })
// console.log(result); //undefined
// //     return "hello";
const animals = ["Chó", "Mèo", "Heo", "Gà"];
function printAnimals(animals){
let content=`<table>
    <thead><
        <tr>
        <th>ID</th>
        <th>Ten loai</th>
        </tr></thead>
        <tbody>`;
        Array.isArray(animals)&& animals.forEach((item,index) => {


content +=`
    <tr>
    <td>${index}</td>
    <td>${item}</td>
    </tr> `
   }) ; 
content +=`</tbody></table>`; 
       document.write(content);
}
printAnimals(animals);