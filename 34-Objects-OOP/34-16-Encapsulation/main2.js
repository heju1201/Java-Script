/*
// Public fields : Trường công khai, trường công cộng
// Private fields : Trường riêng tư
// Public method : Phương thức công khai
// Private method: Phương thức riêng tư
*/

// Thêm dấu gạch dưới: Private fields : Trường riêng tư theo quy ước,
// và nó vẫn có thể truy cập trực tiếp từ bên ngoài
class Wallet {
  constructor(bankName, pin) {
    this.bankName = bankName;
    this._pin = pin;
    this._balance = 0;
  }
  deposit(_balance) {
    this._balance = _balance;
  }
  withdraw(value) {
    if (value > this._balance) {
      console.log("Insufficient money in bank account");
    } else {
      this._balance -= value;
      console.log("Withdrawal successful");
    }
  }
}
const wallet = new Wallet("MB Bank", 487);
console.log(wallet._balance);
wallet.deposit(1000);
wallet.withdraw(1001);
wallet.withdraw(250);
console.log(wallet._balance);
console.log(wallet._pin);
//Bài toán là chúng ta không muốn cho phép truy cập
//trực tiếp để kiểm tra số dư và mã pin
