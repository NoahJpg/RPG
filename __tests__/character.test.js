import Character from '../src/js/character';

describe('Character', () => {
  let character;

  beforeEach(() => {
    rectangle = new Rectangle(3,5);
  });

  test('should correctly test to see character type', () => {
    expect(character.type).toEqual(1);
    expect(character.attribute).toEqual(2);
    expect(character.classType).toEqual(3);
  });


});
