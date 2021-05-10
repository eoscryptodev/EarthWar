/**
 * Map Data Structure that defines Ability Score/Ability Modifier key/value pairs
 */
const abilityMap = new Map();
abilityMap.set( 1, -5 );
abilityMap.set( 2, -4 );
abilityMap.set( 3, -4 );
abilityMap.set( 4, -3 );
abilityMap.set( 5, -3 );
abilityMap.set( 6, -2 );
abilityMap.set( 7, -2 );
abilityMap.set( 8, -1 );
abilityMap.set( 9, -1 );
abilityMap.set( 10, 0 );
abilityMap.set( 11, 0 );
abilityMap.set( 12, 1 );
abilityMap.set( 13, 1 );
abilityMap.set( 14, 2 );
abilityMap.set( 15, 2 );
abilityMap.set( 16, 3 );
abilityMap.set( 17, 3 );
abilityMap.set( 18, 4 );
abilityMap.set( 19, 4 );
abilityMap.set( 20, 5);
abilityMap.set( 21, 5 );
abilityMap.set( 22, 6 );
abilityMap.set( 23, 6 );
abilityMap.set( 24, 7 );
abilityMap.set( 25, 7 );
abilityMap.set( 26, 8 );
abilityMap.set( 27, 8 );
abilityMap.set( 28, 9 );
abilityMap.set( 29, 9 );
abilityMap.set( 30, 10 );

// Get elements within the AbilityMap
for (const element of abilityMap)
{
  // console.log( element );
}
/**
 * Key Ability Scores by Class
 */
export enum KeyAbility
{
  Commander = 'Intelligence',
  Spy = 'Agility',
  Alchemist = 'Wisdom',
  Warlord = 'Strength',
  Mechanaut = 'Strength',
  Aetherist = 'Constitution'
}
export enum DecisionType
{
  Common = 1,
  Uncommon = 5,
  Serious = 10,
  Major = 15
}
