import Battle from './../src/js/battle.js';

describe('Battle', () => {

  test('should correctly determine if character has attacked or defended', () => {
    const battle = new Battle(2,4,5);
    expect(battle.attack).toEqual(true);
    expect(battle.defend).toEqual(true);

  });



});