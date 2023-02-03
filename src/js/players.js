export default class PlayerList {
  
  constructor() {
    this.players = {};
    this.currentId = 0;
  }

  addPlayer(character) {
    character.id = this.assignId();
    this.players[character.id] = character;
  }

  assignId() {
    this.currentId += 1;
    return this.currentId;
  };
}
