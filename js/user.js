class User {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }
  makeDeposit(amt) {
    this.balance += amt;
    return this;
  }
  makeWithdrawal(amt) {
    this.balance -= amt;
    return this;
  }
  displayBalance() {
    console.log(`User: ${this.name}, Balance: ${this.balance}`);
    return this;
  }
  transferBalance(otherUser, amt) {
    this.balance -= amt;
    otherUser.balance += amt;
    return this;
  }
}

const katrina = new User("Katrina");
const zen = new User("Zen");
const ryan = new User("Ryan");

katrina.makeDeposit(200).makeDeposit(100).makeDeposit(50).makeWithdrawal(100).displayBalance();

zen.makeDeposit(150).makeDeposit(100).makeWithdrawal(25).makeWithdrawal(25).displayBalance();

ryan.makeDeposit(400).makeWithdrawal(75).makeWithdrawal(75).makeWithdrawal(100).displayBalance();

katrina.transferBalance(ryan, 50).displayBalance();
ryan.displayBalance();
