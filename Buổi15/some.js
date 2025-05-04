const student= [
    {id:1, name:"Dao anh tung", gender:"male"},
    {id:2, name:"Dao anh tung1", gender:"female"},
    {id:3, name:"Dao anh tung2", gender:"male"},
    {id:4   , name:"Dao anh tung3", gender:"female"},
]
const result = student.every((item)=>item.gender ==="female");
console.log(result); // false