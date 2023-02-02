import PlayerList from "../src/js/players.js";

describe('PlayerList', () => {

  test('should create a new player list object with keys .players and .currentId', () => {
    const playerList = new PlayerList();
    expect(playerList).toEqual({"players": {}, "currentId": 0});
  });

  test('should add a new player to the list', () => {
    const playerList = new Playerlist();
  })

  test('should assign a unique Id each time it is called.', () => {
    const playerList = new PlayerList();
    const playerList2 = new PlayerList();
    playerList.assignId();
    expect(playerList.currentId).toEqual(1);
  });
})