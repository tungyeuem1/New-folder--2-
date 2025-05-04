// const obj1 = {name:"tung",age: 20};
// const obj2 = {email:"tung@gmail.comm"};
// const  arr = [1,2,3,4,5];
// const obj3 = {...obj1, ...obj2, ...arr};
// console.log(obj3);

// const obj4 = {fullname:"tung",email:"tung@gmail.com",idol:"virrus",password:"123456",bios:"coder peter"};
// const copy={...obj4};
// console.log("hello",1,2,3,"JS");
// function sum(...rest){
//     console.log(rest);
//     let total = 0;
//     for (let i = 0; i < rest.length; i++){
//         total += rest[i];
//     }
//     return total;
// }

const people = [
    {name:"tung",scale:60},
    {name:"huy",scale:50},
    {name:"dat",scale:120},
    {name:"dung",scale:60},
]
function findPeople(...people){
    let total = 0;
    for (let i=0; i<people.length; i++){
        total += people[i].scale;
    }
    if(total>200){
        return true;
    }
    else{
        return false;
    }
}
console.log(findPeople(...people));
