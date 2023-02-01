import Character from './../src/js/characters.js';

describe('Character', () => {
  
    test('should correctly create a character object with type, attribute, and classType keys', () => {
      const character = new Character("fighter", "strength", "jack");
      expect(character.type).toEqual("fighter");
      expect(character.attribute).toEqual("strength");
      expect(character.classType).toEqual("jack");
  });
    test('should correctly determine what the character type is', () => {
    const character = new Character("fighter", "strength", "jack");
    character.ArcheType;
    expect(character.characterType).toEqual("warrior");
  });
});

  // test('should correctly test to see character type', () => {
  //   expect(character.type).toEqual("glaive");
  //   expect(character.attribute).toEqual("nano");
  //   expect(character.classType).toEqual("jack");
  // });
