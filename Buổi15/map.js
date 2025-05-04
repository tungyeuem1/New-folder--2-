/**
 * 
 */

const arr2 = [
    {id:1, name:"Dao anh tung", age:21},
    {id:2, name:"Dao anh hung", age:26},
    {id:3, name:"Dao anh dung", age:25},
    {id:4, name:"Dao anh quang1", age:14},
    {id:5, name:"Dao anh quang2", age:17},
    {id:6, name:"Dao anh quang3", age:19},
]
const result2 = arr2.map((item,index,arr)=>{
    return{
        ...item,
        role:"student",
        
    }
  
    
})
console.log(result2); // [ { id: 2, name: 'Dao anh hung', age: 26 } ]

const arr3 = [
    {id:1 ,name:"tomato",price:2,quantity:10},
    {id:2 ,name:"kiwi",price:3,quantity:18},
]
const result3 = arr3.map((item,index,arr)=>{
    return {
        ...item,
        total: item.price * item.quantity
    }   
})
console.log(result3); 