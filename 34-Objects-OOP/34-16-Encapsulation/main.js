/*
// Public fields : Trường công khai, trường công cộng
// Private fields : Trường riêng tư
// Public method : Phương thức công khai
// Private method: Phương thức riêng tư
*/

// Thêm dấu gạch dưới: Private fields : Trường riêng tư theo quy ước,
// và nó vẫn có thể truy cập trực tiếp từ bên ngoài
class Wallet {
  #pin; // private
  #balance; // private
  #isPinEntered = false; // private
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.#pin = pin;
    this.#balance = 0;
  }
  deposit(value) {
    if (!this.#isPinEntered) {
      console.log("Invalid pin");
      return;
    }
    this.#balance += value;
  }
  #validatePin(pin) {
    return this.#pin === pin;
  }

  enteredPin(pin) {
    if (this.#validatePin(pin)) {
      this.#isPinEntered = true;
    } else {
      console.log("Invalid pin");
    }
  }
  withdraw(value) {
    if (!this.#isPinEntered) {
      console.log("check pin code");
      return;
    }
    if (value > this.#balance) {
      console.log("Insufficient money in bank account");
    } else {
      this.#balance -= value;
      console.log("Withdrawal successful");
    }
  }

  get balance() {
    if (!this.#isPinEntered) {
      console.log("Invalid pin");
      return;
    }
    return this.#balance;
  }
}
const wallet = new Wallet("MB Bank", 487);
// console.log(wallet.#balance);
// enter pin
wallet.enteredPin(487);
wallet.deposit(1000);
wallet.withdraw(1001);
wallet.withdraw(250);
console.log(wallet.balance);

// console.log(wallet.#balance);
// console.log(wallet.#pin);
//Bài toán là chúng ta không muốn cho phép truy cập
//trực tiếp để kiểm tra số dư và mã pin
