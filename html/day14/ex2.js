const obj1={
    name:"Tung",
    infor:{
        sex:"male",
        age:33
    }
}
const obj2 = JSON.parse(JSON.stringify(obj1));
obj1.infor.sex="LGBT";
console.log(obj2);
