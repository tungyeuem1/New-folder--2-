const spam = setInterval(() => {
    const h1Element= document.createElement("h1")
    h1Element.innerText ="I LOVE YOU"
    document.body.appendChild(h1Element)
}, 5000);