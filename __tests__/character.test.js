import Character from './../src/js/characters.js';

describe('Character', () => {
  
    test('should correctly create a character object with type, attribute, and classType keys', () => {
      const character = new Character("jack", "strength", "fighter");
      expect(character.type).toEqual("jack");
      expect(character.attribute).toEqual("strength");
      expect(character.classType).toEqual("fighter");
  });
    test('should correctly determine what the character type is', () => {
    const character = new Character("jack", "strength", "fighter");
    character.archeType();
    expect(character.characterType).toEqual("warrior");
  });
  test('should correctly determine what the character type is', () => {
    const character = new Character("jack", "wisdom", "fighter");
    character.archeType();
    expect(character.characterType).toEqual("monk");
  });
  test('should correctly determine what the character type is', () => {
    const character = new Character("jack", "dexterity", "fighter");
    character.archeType();
    expect(character.characterType).toEqual("rogue");
  });
  test('should correctly determine what the character type is', () => {
    const character = new Character("jack", "wisdom", "mage");
    character.archeType();
    expect(character.characterType).toEqual("wizard");
  });
  test('should correctly determine what the character type is', () => {
    const character = new Character("jack", "wisdom", "theif");
    character.archeType();
    expect(character.characterType).toEqual("sneaky");
  });
});

  // test('should correctly test to see character type', () => {
  //   expect(character.type).toEqual("glaive");
  //   expect(character.attribute).toEqual("nano");
  //   expect(character.classType).toEqual("jack");

