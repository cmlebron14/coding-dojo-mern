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

class User {
  constructor(name) {
    this.name = name;
    this.account = new BankAccount(0, 0.02);
  }
  makeDeposit(amt) {
    this.account.deposit(amt);
    return this;
  }
  makeWithdrawal(amt) {
    this.account.withdraw(amt);
    return this;
  }
  displayBalance() {
    console.log(`User: ${this.name}, Balance: ${this.account.balance}`);
    return this;
  }
  transferBalance(otherUser, amt) {
    this.account.withdraw(amt);
    otherUser.account.deposit(amt);
    return this;
  }
}

const christina = new User("Christina");
const katrina = new User("Katrina");

christina.makeDeposit(150);
katrina.makeDeposit(50);
christina.displayBalance;
katrina.displayBalance;
christina.transferBalance(katrina, 50);
christina.displayBalance;
katrina.displayBalance;
