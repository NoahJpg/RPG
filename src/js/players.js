export default class PlayerList {
  
  constructor() {
    this.players = {};
    this.currentId = 0;
  }

  addPlayer() {

  }

  assignId() {
    this.currentId += 1;
    return this.currentId;
  };
}
