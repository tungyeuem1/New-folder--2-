fetch("https://dummyjson.com/products").then(((res)=>{console.log(res)})).then((data)=>{console.log(data)}).catch((err)=>{
    console.log(err)
});
