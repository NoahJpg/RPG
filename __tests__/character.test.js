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
  test('should correctly determine what the character type is', () => {
    const character = new Character("jack", "dexterity", "mage");
    character.archeType();
    expect(character.characterType).toEqual("illusionist");
  });
  test('should correctly determine what the character type is', () => {
    const character = new Character("jack", "dexterity", "theif");
    character.archeType();
    expect(character.characterType).toEqual("theif");
  });
  test('should correctly determine what the character type is', () => {
    const character = new Character("jack", "strength", "mage");
    character.archeType();
    expect(character.characterType).toEqual("paladin");
  });
  test('should correctly determine what the character type is', () => {
    const character = new Character("jack", "strength", "theif");
    character.archeType();
    expect(character.characterType).toEqual("duelist");
  });
  test('should correctly assign attacks based on this.characterType', () => {
    const character = new Character("jack", "strength", "theif");
    character.archeType();
    character.setAttacks();
    expect(character.attacks).toEqual({slash: `${5} damage`});
  });
  test('should correctly assign attacks to the theif characterType', () => {
    const character = new Character("jack", "dexterity", "theif");
    character.archeType();
    character.setAttacks();
    expect(character.attacks).toEqual({slash: `${5} damage`});
  });
  test('should correctly assign attacks to the warrior characterType', () => {
    const character = new Character("jack", "strength", "fighter");
    character.archeType();
    character.setAttacks();
    expect(character.attacks).toEqual({slash: `${5} damage`});
  });
  test('should correctly assign attacks to the rogue characterType', () => {
    const character = new Character("jack", "dexterity", "fighter");
    character.archeType();
    character.setAttacks();
    expect(character.attacks).toEqual({slash: `${5} damage`});
  });
  test('should correctly assign attacks to the paladin characterType', () => {
    const character = new Character("jack", "strength", "mage");
    character.archeType();
    character.setAttacks();
    expect(character.attacks).toEqual({smite: `${7} damage`});
  });
  test('should correctly assign attacks to the wizard characterType', () => {
    const character = new Character("jack", "wisdom", "mage");
    character.archeType();
    character.setAttacks();
    expect(character.attacks).toEqual({smite: `${7} damage`});
  });
  test('should correctly assign attacks to the sneaky characterType', () => {
    const character = new Character("jack", "wisdom", "theif");
    character.archeType();
    character.setAttacks();
    expect(character.attacks).toEqual({poison: `${4} damage`});
  });
  test('should correctly assign attacks to the illusionist characterType', () => {
    const character = new Character("jack", "dexterity", "mage");
    character.archeType();
    character.setAttacks();
    expect(character.attacks).toEqual({poison: `${4} damage`});
  });
  test('should correctly assign attacks to the monk characterType', () => {
    const character = new Character("jack", "wisdom", "fighter");
    character.archeType();
    character.setAttacks();
    expect(character.attacks).toEqual({meditate: `${10} damage`});
  });
  test('should correctly assign defense to the warrior characterType', () => {
    const character = new Character("jack", "strength", "fighter");
    character.archeType();
    character.setDefense();
    expect(character.defense).toEqual({shield: `${5} protect`});
  });
  test('should correctly assign defense to the theif characterType', () => {
    const character = new Character("jack", "dexterity", "theif");
    character.archeType();
    character.setDefense();
    expect(character.defense).toEqual({shield: `${5} protect`});
  });
  test('should correctly assign defense to the duelist characterType', () => {
    const character = new Character("jack", "strength", "theif");
    character.archeType();
    character.setDefense();
    expect(character.defense).toEqual({shield: `${5} protect`});
  });
  test('should correctly assign defense to the rogue characterType', () => {
    const character = new Character("jack", "dexterity", "fighter");
    character.archeType();
    character.setDefense();
    expect(character.defense).toEqual({shield: `${5} protect`});
  });
  test('should correctly assign defense to the paladin characterType', () => {
    const character = new Character("jack", "strength", "mage");
    character.archeType();
    character.setDefense();
    expect(character.defense).toEqual({ward: `${3} protect`});
  });
  test('should correctly assign defense to the paladin characterType', () => {
    const character = new Character("jack", "wisdom", "mage");
    character.archeType();
    character.setDefense();
    expect(character.defense).toEqual({ward: `${3} protect`});
  });
  test('should correctly assign defense to the sneaky characterType', () => {
    const character = new Character("jack", "wisdom", "theif");
    character.archeType();
    character.setDefense();
    expect(character.defense).toEqual({potion: `${6} protect`});
  });
});

  // test('should correctly test to see character type', () => {
  //   expect(character.type).toEqual("glaive");
  //   expect(character.attribute).toEqual("nano");
  //   expect(character.classType).toEqual("jack");

