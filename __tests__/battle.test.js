import Character from './../src/js/character.js';

describe('Battle', () => {

  test('should correctly determine if character has attacked or defended', () => {
    const battle = new Battle();
    expect(battle.attack).toEqual(true);
    expect(battle.defend).toEqual(true);

  });



});