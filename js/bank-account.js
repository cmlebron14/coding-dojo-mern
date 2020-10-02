class BankAccount {
  constructor(balance = 0, interestRate = 0.01) {
    this.balance = balance;
    this.interestRate = interestRate;
  }
  deposit(amt) {
    this.balance += amt;
    return this;
  }
  withdraw(amt) {
    if (amt < this.balance) {
      this.balance -= amt;
    } else {
      console.log("Insufficient funds: charging a $5 fee");
      this.balance -= 5;
    }
    return this;
  }
  displayAccountInfo() {
    console.log(`Balance: $${this.balance}`);
    return this;
  }
  yieldInterest() {
    this.balance += this.balance * this.interestRate;
    return this;
  }
}

const account1712 = new BankAccount(0, 0.01);
const account1692 = new BankAccount(50, 0.01);

account1712.deposit(50).deposit(100).deposit(300).withdraw(250).yieldInterest().displayAccountInfo();
account1692.deposit(300).deposit(150).withdraw(50).withdraw(50).withdraw(50).withdraw(50).yieldInterest().displayAccountInfo();
