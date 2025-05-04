
let height = prompt("moi nhap chieu cao")
let weight = prompt("moi ban nhap can nang")
function calo(weight,height){
    let calo = weight/height**2
    switch(true){
        case (calo < 23):
            console.log (calo + "thieu can")
            break;
        case(23 < calo < 25):
            console.log(calo + "ban binh thuong")
            break;
        case(25 <= calo < 28):
            console.log(calo + "ban hoi beo")
            break;
        case(calo >28):
            console.log(calo + "ban bbeo phi")
            break;

    }

}calo(weight,height)