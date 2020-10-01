class User {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }
  makeDeposit(amt) {
    this.balance += amt;
  }
  makeWithdrawal(amt) {
    this.balance -= amt;
  }
  displayBalance() {
    console.log(`User: ${this.name}, Balance: ${this.balance}`);
  }
  transferBalance(otherUser, amt) {
    this.balance -= amt;
    otherUser.balance += amt;
  }
}

const katrina = new User("Katrina");
const zen = new User("Zen");
const ryan = new User("Ryan");

katrina.makeDeposit(200);
katrina.makeDeposit(100);
katrina.makeDeposit(50);
katrina.makeWithdrawal(100);
katrina.displayBalance();

zen.makeDeposit(150);
zen.makeDeposit(100);
zen.makeWithdrawal(25);
zen.makeWithdrawal(25);
zen.displayBalance();

ryan.makeDeposit(400);
ryan.makeWithdrawal(75);
ryan.makeWithdrawal(75);
ryan.makeWithdrawal(100);
ryan.displayBalance();

katrina.transferBalance(ryan, 50);
katrina.displayBalance();
ryan.displayBalance();
