function taxSalary(salary) {
    if (typeof salary !== "number" || isNaN(salary) || salary < 0) {
      console.log("Thu nhập không hợp lệ");
      return;
    }
  
    let tax = 0;
  
    if (salary > 80000000) {
      tax = (salary - 80000000) * 0.3 + 30000000 * 0.2 + 25000000 * 0.1 + 14000000 * 0.05;
    } else if (salary > 50000000) {
      tax = (salary - 50000000) * 0.2 + 25000000 * 0.1 + 14000000 * 0.05;
    } else if (salary > 25000000) {
      tax = (salary - 25000000) * 0.1 + 14000000 * 0.05;
    } else if (salary > 11000000) {
      tax = (salary - 11000000) * 0.05;
    }
  
    console.log(`Số tiền cần trả: ${tax.toLocaleString("vi-VN")}đ`);
  }
  
  // Nhập thu nhập từ bàn phím
  let input = window.prompt("Nhập thu nhập của bạn:");
  let salary = Number(input);
  taxSalary(salary);
  

  