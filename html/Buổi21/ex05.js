const data = [
    { id: 1, name: "Dao Anh Tung", price: 10000 },
    { id: 1, name: "Dao Anh Trung", price: 30000 },
    { id: 1, name: "Dao Anh Hung", price: 50000 },
    { id: 1, name: "Dao Anh Nguyen", price: 20000 },
    { id: 1, name: "Dao Anh Sung", price: 20000 },
];

data.sort((a, b) => b.price - a.price);
const container = document.createElement("div");
container.style.width = "100%";
container.style.height = "auto";
document.body.appendChild(container);
data.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ${item.price}`;
    div.style.padding = "10px";
    div.style.margin = "5px 0";
    if (index === 0) {
        div.style.backgroundColor = "yellow";
        div.style.fontWeight = "bold";
    } else {
        div.style.backgroundColor = "lightgray";
    }

    container.appendChild(div);
});