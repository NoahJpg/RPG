import Battle from '../src/js/battle.js';

describe('Character', () => {
  let character;

  beforeEach(() => {
    rectangle = new Rectangle(3,5);
  });

  test('should correctly test to see character type', () => {
    expect(character.type).toEqual("glaive");
    expect(character.attribute).toEqual("nano");
    expect(character.classType).toEqual("jack");
  });


});
