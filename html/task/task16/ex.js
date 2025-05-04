// Input:
function taxiBill(km) {
    // Xử lý và in ra kết quả
    for (let i = 0; i < km.length; i++) {
        let money = 0;
        if(km[i] < 0){
            console.log("Số km không hợp lệ");
        }
        else if (1<=km[i] <= 10) {
            money = 10000 + (km[i] - 1) * 8000 ;
            console.log(`Số tiền phải trả cho ${i + 1} chuyến đi là: ${money}đ`);
        } else  {
            money = 10000 + 9 * 8000 + (km[i] - 30) * 7000;
            console.log(`Số tiền phải trả cho ${i + 1} chuyến đi là: ${money}đ`);
        }
       
    }
  }
  km = prompt("Nhập số km đi được của các chuyến đi (cách nhau bởi dấu phẩy):").split(",").map(Number);
  taxiBill(km);