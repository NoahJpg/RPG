export default class Battle {
  constructor(attack, defend) {
    this.attack = attack;
    this.defend = defend;
  }

  checkAttack() {
    if (this.attack) {
      return "attack!";
    } else if (this.defend) {
      return "defend";
  }    
}
}