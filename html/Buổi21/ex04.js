const h2Elements = document.getElementsByTagName("h2")[0]
console.log(h2Elements.style)
h2Elements.style.color = "red"
h2Elements.style.backgroundColor = "blue"
h2Elements.style.cssText=`
pading:10px;
magin:10px;
border=radius:10px;
background-color:blue;`