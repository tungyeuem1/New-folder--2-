const arr3 = [1,5,-1,"Hoang", null , NaN,"",,,100]
function max(arr3){
const arrCopy = arr3.flat(1);
console.log(arrCopy);
const stringArr=[]
const arrNumber = []
const falsyValuesArr=[]
arrCopy.forEach(element=>{
  if(!element) {
   falsyValuesArr.push(element); 
  }else if (typeof element === "string"&& element !== ""){
    stringArr.push(element);
  }else if (typeof element === "number"){
    arrNumber.push(element);
  }
}
)
return[
  ...arrNumber.sort((a,b)=>a-b),
  ...stringArr.sort(),
  ...falsyValuesArr,
]


}
console.log(max(arr3));
