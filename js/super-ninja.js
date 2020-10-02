class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName() {
    console.log(this.name);
    return this;
  }
  showStats() {
    console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    return this;
  }
  drinkSake() {
    this.health += 10;
    return this;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200, 10, 10);
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("This is a very wise message.");
  }
}

const christina = new Sensei("Christina");
christina.showStats();
christina.speakWisdom();
christina.showStats();
