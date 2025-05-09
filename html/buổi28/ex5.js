const result = fetch("https://dummyjson.com/products")
console.log(result);
console.log(Promise);
const myFetch = new PerformanceMeasure((resolve,reject)=>{
    resolve("thanh cong");
    //* neu that bai
    //reject("reject")
})
myFetch.then((result)=>{
    console.log(result);
    return result
}).then((data)=>{
    if(data.how>=5000){
        console.log("mua nha");
    }else{
        console.log("mua tra gop");
        
    }
}).catch((error)=>{
    console.log(error)
})

