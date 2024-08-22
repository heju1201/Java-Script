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
    this.pin = pin;
    this.balance = 0;
  }
  deposit(balance) {
    this.balance = balance;
  }
  withdraw(value) {
    if (value > this.balance) {
      console.log("Insufficient money in bank account");
    } else {
      this.balance -= value;
      console.log("Withdrawal successful");
    }
  }
}
const wallet = new Wallet("MB Bank", 487);
console.log(wallet.balance);
wallet.deposit(1000);
wallet.withdraw(1001);
wallet.withdraw(250);
console.log(wallet.balance);
console.log(wallet.pin);
