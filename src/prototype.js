
// Object oriented design is commonly used in video games.  For this part of the assignment
// you will be implementing several classes with their correct inheritance heirarchy.

// In this file you will be creating three classes:
// GameObject
//   createdAt
//   dimensions
//   destroy() // prototype method -> returns the string 'Game object was removed from the game.'
function GameObject(attrs) {
  this.createdAt = attrs.createdAt;
  this.dimensions = attrs.dimensions;
  this.destroy = () => {
    return 'Game object was removed from the game';
  };
}
// NPC
//   hp
//   name
//   takeDamage() // prototype method -> returns the string '<object name> took damage.'
//   // should inherit destroy() from GameObject's prototype
function NPC(npcAttrs) {
  GameObject.call(this, npcAttrs);
  this.hp = npcAttrs.hp;
  this.name = npcAttrs.name;
  this.takeDamage = () => {
    return `${this.name} took damage.`;
  };
}
// Humanoid
//   faction
//   weapons
//   language
//   greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//   // should inherit destroy() from GameObject through NPC
//   // should inherit takeDamage() from NPChume
function Humanoid(humeAttrs) {
  NPC.call(this, humeAttrs);
  this.faction = humeAttrs.faction;
  this.weapons = humeAttrs.weapons;
  this.language = humeAttrs.language;
  this.greet = () => `${this.name} offers a greeting in ${this.language}.`;
}
// Inheritance chain: Humanoid -> NPC -> GameObject
// Instances of Humanoid should have all of the same properties as NPC and GameObject.
// Instances of NPC should have all of the same properties as GameObject.

// Example:

const hamsterHuey = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Hamster Huey',
  faction: 'Gooey Kablooie',
  weapons: [
    'bubblegum',
  ],
  language: 'Hamsterish',
});

console.log(hamsterHuey.greet()); // returns 'Hamster Huey offers a greeting in Hamsterish'
console.log(hamsterHuey.takeDamage()); // returns 'Hamster Huey took damage.'
console.log(hamsterHuey.destroy()); // returns 'Game object was removed from the game.'


/* eslint-disable no-undef */

module.exports = {
  GameObject,
  NPC,
  Humanoid,
};
