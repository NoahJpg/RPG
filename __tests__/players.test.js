import PlayerList from "../src/js/players.js";
import Character from "../src/js/characters.js";

describe('PlayerList', () => {

  test('should create a new player list object with keys .players and .currentId', () => {
    const playerList = new PlayerList();
    expect(playerList).toEqual({"players": {}, "currentId": 0});
  });



  test('should assign a unique Id each time it is called.', () => {
    const playerList = new PlayerList();
    playerList.assignId();
    expect(playerList.currentId).toEqual(1);
  });

  test('should assign a unique Id each time it is called on a player being added to a PlayerList', () => {
    const playerList = new PlayerList();
    let character = new Character("jack", "wisdom", "fighter");
    playerList.addPlayer(character);
    expect(character.id).toEqual(1);
  });

  test('should add a new player to the list', () => {      const playerList = new PlayerList();
    let player1 = new Character("jack", "wisdom", "fighter");
    let player2 = new Character("nano", "wisdom", "theif");
    playerList.addPlayer(player1);
    playerList.addPlayer(player2);
    expect(playerList.players["1"]).toEqual({"type": "jack", "attribute": "wisdom", "id": 1, "classType": "fighter"});
    expect(playerList.players["2"]).toEqual({"type": "nano", "attribute": "wisdom", "id": 2, "classType": "theif"});
  });
})