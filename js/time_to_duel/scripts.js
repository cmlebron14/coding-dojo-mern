class Player {
  constructor(name) {
    this.name = name;
    this.inHand = "";
  }
  summons(unitCard) {
    if (unitCard instanceof UnitCard) {
      this.inHand = unitCard;
      console.log(`${this.name} has summoned a ${unitCard.name} card`);
    } else {
      throw new Error("Must summon a unit!");
    }
  }
  play(unitCard, target) {
    unitCard.playOn(target.inHand);
    console.log(`${this.name} has played a ${unitCard.name} card on ${target.name}'s card`);
  }
}

class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class UnitCard extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    if (target instanceof UnitCard) {
      target.resilience -= this.power;
      console.log(`${this.name} attacked ${target.name}`);
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

class EffectCard extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  playOn(target) {
    if (target instanceof UnitCard) {
      target[this.stat] += this.magnitude;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}
const hardAlgorithm = new EffectCard("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new EffectCard("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new EffectCard("Pair Programming", 3, "Increase target's power by 2", "power", 2);

//game play
const playerOne = new Player("George");
const playerTwo = new Player("Nancy");
console.log(`${playerOne.name} and ${playerTwo.name} are going to play!`);
console.log(`${playerOne.name} will go first.`);

const redBeltNinja = new UnitCard("Red Belt Ninja", 3, 3, 4);
playerOne.summons(redBeltNinja);
playerOne.play(hardAlgorithm, playerOne);

console.log(`It's ${playerTwo.name}'s turn!`);
const blackBeltNinja = new UnitCard("Black Belt Ninja", 4, 5, 4);
playerTwo.summons(blackBeltNinja);
playerTwo.play(unhandledPromiseRejection, playerOne);

console.log(`It's ${playerOne.name}'s turn!`);
playerOne.play(pairProgramming, playerOne);
playerOne.inHand.attack(playerTwo.inHand);
