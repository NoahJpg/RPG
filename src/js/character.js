export default class Character {
  constructor(type, attribute, classType) {
    this.type = type;
    this.attriubute = attribute;
    this.classType = classType;
  }

  getBuildType() {
    return this.type + this.attriubute + this.classType;
  }
}