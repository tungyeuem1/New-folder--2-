// const arr = [1,2,3,4,5]
// const result = arr.reduce((a,b,c,d)=>{
//     console.log(a,b,c,d);
    
// })
// const  arrNumber = [1,2,3,4,5,6,7]
// function factorial(arr){
//     arr.reduce((acc,cur,index,array)=>{

//         return;
//     })
// }
// factorial(arrNumber)

 const animals =[
   "dog","cat","python","cat","virrus","snake","virrus","dom dom","virrus" ]
// function countAnimal(arr){
//    return arr.reduce((acc,cur)=>{
//         if(acc[cur]){
//             acc[cur]++
//         }else{
//             acc[cur]=1
//         }
//         return acc;
//     },{})
// }
// console.log(countAnimal(animals));


function duplicate(arr){
    return arr.reduce((acc,cur)=>{
        //if (acc.findIndex((item)=>item===cur)===-1){
        if(!acc.includes(cur)){
            acc.push(cur)
        }
        return acc;
    },{})
}