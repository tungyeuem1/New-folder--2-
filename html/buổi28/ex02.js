const arr1 =[
    {id:1,name:"Hoang"},
    {id:2,name:"Tung"}
];
const str1 = JSON.stringify(arr1);
console.log(str1);
console.log(typeof str1)
console.log(JSON.parse(str1))
const products =[{id:1,name:"Hoang",price:11111}];
localStorage.setItem("products",JSON.stringify(products))
const studentManager = {
    students:[],
    addStudent:function(students){
        this.students.push(students)
    },
    test1:null,
    test2:undefined,
    test3:NaN,
};
console.log(JSON.stringify(studentManager))

/**
 * JSON:
 * - khong su ly duoc fuction,
 * - khong luu thuoc tinh co value va undefined,
 * -NaN khi luu chuyen thanh null
 */
