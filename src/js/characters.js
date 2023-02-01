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
  }
}



//   getBuildType() {
//     return this.type + this.attriubute + this.classType;
//   }
// }



//  if ((this.attribute === "strength") && (this.classType === "mage")) {
//   this.characterType = "paladin";
// } if ((this.attribute === "strength") && (this.classType === "theif")) {
//   this.characterType = "duelist";
// }
// }