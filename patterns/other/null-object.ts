interface Weapon {
  attack(): void;
}

class Sword implements Weapon {
  attack() {
    console.log("Attacking the enemy with a sword!");
  }
}

class NoWeapon implements Weapon {
  attack() {
    console.log("Do nothing");
  }
}

class Character {
  private weapon: Weapon;

  constructor() {
    this.weapon = new NoWeapon();
  }

  setWeapon(weapon: Weapon) {
    this.weapon = weapon;
  }

  attack() {
    this.weapon.attack();
  }
}

class Demo {
  static run() {
    const hero = new Character();
    const sword = new Sword();

    hero.attack();
    hero.setWeapon(sword);
    hero.attack();
  }
}

export default Demo;
