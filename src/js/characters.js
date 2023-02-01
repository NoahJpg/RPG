export default class Character {
  constructor(type, attribute, classType) {
    this.type = type;
    this.attribute = attribute;
    this.classType = classType;
  }


  archeType() {
    /* istanbul ignore else */
    if ((this.attribute === "wisdom") && (this.classType === "fighter")) {
      this.characterType = "monk"; 
    }
    if ((this.attribute === "strength") && (this.classType === "fighter")) {
      this.characterType = "warrior";
    }
    if ((this.attribute === "dexterity") && (this.classType === "fighter")) {
      this.characterType = "rogue";
    }
    if ((this.attribute === "wisdom") && (this.classType === "mage")) {
      this.characterType = "wizard";
    }
    if ((this.attribute === "wisdom") && (this.classType === "theif")) {
      this.characterType = "sneaky";
    }
    if ((this.attribute === "dexterity") && (this.classType === "mage")) {
      this.characterType = "illusionist";
    }
    if ((this.attribute === "dexterity") && (this.classType === "theif")) {
      this.characterType = "theif";
    }
    if ((this.attribute === "strength") && (this.classType === "mage")) {
      this.characterType = "paladin";
    } 
    if ((this.attribute === "strength") && (this.classType === "theif")) {
      this.characterType = "duelist";
    }
  }

  setAttacks() {
    /* istanbul ignore else */
    if (this.characterType === "duelist" || this.characterType === "theif" || this.characterType === "warrior" || this.characterType === "rogue") {
      this.attacks = {slash: `${5} damage`}
    } else if (this.characterType === "paladin" || this.characterType === "wizard") {
      this.attacks = {smite: `${7} damage`}
    } else if (this.characterType === "sneaky" || this.characterType === "illusionist") {
      this.attacks = {poison: `${4} damage`}
    } else if (this.characterType === "monk") {
      this.attacks = {meditate: `${10} damage`}
    }
  }


  setDefense() {
   /* istanbul ignore else */
    if (this.characterType === "warrior" || this.characterType === "theif") {
      this.defense = {shield: `${5} protect`}
    } 
  }

}