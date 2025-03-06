export type Spell = {
  name: string;
  focus: number;
  properties: string[];
  materials: string[];
  description: string;
};


// 1) FULL Transmutation Spell List (with focus added)
// ------------------------------------------------------------------
  export const transmutationSpells = [
    {
      name: "Give me, Strength",
      focus: 50,
      properties: ["Western", "Adulthood", "Sanguine", "Masculine"],
      materials: ["2 Salt", "1 Property"],
      description:
        "Touch yourself or an adjacent ally, give them 35 temporary STR until the end of their second turn.",
    },
    {
      name: "Give me, Dexterity",
      focus: 50,
      properties: ["Eastern", "Youth", "Phlegmatic", "Feminine"],
      materials: ["2 Mercury", "1 Property"],
      description:
        "Touch yourself or an adjacent ally, give them 35 temporary DEX until the end of their second turn.",
    },
    {
      name: "Altered Self",
      focus: 60,
      properties: ["Phlegm", "Phlegmatic", "Yellow Bile", "Black Bile"],
      materials: ["3 Mercury", "1 Property"],
      description:
        "Touch yourself or an adjacent ally. Choose two of the following buffs: +10 to hit, +10% damage, or +10 evasion until the end of their second turn.",
    },
    {
      name: "Earthbind",
      focus: 65,
      properties: ["Dry", "Southern", "Autumn", "Liver"],
      materials: ["2 Salt", "1 Property"],
      description:
        "This can only be done within the range of your catalyst and under a flying enemy. Cause the earth under the enemy to sprout upwards and strike the enemy using your catalyst’s hit. If it hits, this attack deals 6 additional aerial poise damage. If this attack breaks aerial poise, the fall damage of the enemy is doubled, though if the enemy is immune to fall damage, they lose that immunity or resistance to fall damage but do not gain double the fall damage.",
    },
    {
      name: "Polymorph",
      focus: 65,
      properties: ["Phlegmatic", "Infancy", "Blood", "Brain"],
      materials: ["3 Mercury", "1 Property"],
      description:
        "Touch yourself or an adjacent ally and cause them to change their shape to a creature or being of your choosing. This lasts for an hour. While they are in that shape, they speak however the creature or being would speak. Those under polymorph trying to act as an individual gain +25 to any stealth or influence rolls required to pass off as that individual. If you are attempting to do this against an enemy, you must make an attack using your catalyst with a hit penalty of 30 added on.",
    },
    {
      name: "Fleet-Footed",
      focus: 50,
      properties: ["Youth", "Liver", "Gender Neutral", "Neither Hot or Cold"],
      materials: ["1 Sulfur", "1 Salt", "1 Property"],
      description:
        "Touch yourself or an adjacent ally, doubling their movement speed until the end of their turn.",
    },
    {
      name: "Lesser Wings",
      focus: 50,
      properties: ["Sanguine", "Feminine", "Spleen", "Northern"],
      materials: ["1 Sulfur", "1 Mercury", "1 Property"],
      description:
        "Touch yourself or an adjacent ally and give them wings that last until the end of your second turn. These wings allow them to fly at half their movement speed, they are considered flying if they end their turn in the middle of the air.",
    },
    {
      name: "Prestidigitation",
      focus: 35,
      properties: ["Spring", "Directionless", "Gender Neutral", "Neither Dry or Wet"],
      materials: ["1 Salt", "1 Property"],
      description:
        "You can create a minor illusion of your choice (up to the GM’s discretion). You can use your alchemy skill against their perception skill to see if they believe your trick. ",
    },
    {
      name: "One with Nature",
      focus: 40,
      properties: ["Neither cold or hot", "Yellow Bile", "Phlegm", "Sanguine"],
      materials: ["1 Sulfur", "1 Salt", "1 Property"],
      description:
        "You can immediately make a stealth check with a +25 bonus as you grow the necessary camouflage to become part of your environment. This lasts until you exit stealth.",
    },
    {
      name: "Barkskin",
      focus: 50,
      properties: ["Dry", "Spring", "Masculine", "Adulthood"],
      materials: ["2 Salt", "1 Property"],
      description:
        "Touch yourself or an adjacent ally, granting 40 temporary Slashing and Piercing defense until the end of their third turn.",
    },
    {
      name: "Featherfall",
      focus: 50,
      properties: ["Cold", "Gallbladder", "Spring", "Liver"],
      materials: ["1 Sulfur", "1 Property"],
      description:
        "Use as a reaction when someone is about to fall, negating all fall damage.",
    },
    {
      name: "Gaseous Form",
      focus: 55,
      properties: ["Alcohol", "Phlegmatic", "Neither wet or dry", "Neither hot or cold"],
      materials: ["2 Mercury", "1 Property"],
      description:
        "This can only be done as a reaction, when you are about to be attacked, you can make yourself into a gaseous form, this makes you immune to all physical damage for a single attack. But against elemental attacks, you gain +30 evasion.",
    },
    {
      name: "Alter Weapon",
      focus: 95,
      properties: [
        "Elderly",
        "Blood",
        "Eastern",
        "Northern",
        "Neither Dry or Wet",
        "Feminine",
      ],
      materials: ["2 Sulfur", "1 Property"],
      description:
        "Put your hand on a weapon and increase its hit by 10 and damage by 10%. By boosting this to 90 focus, this can be cast as a free action instead. You may also apply one of the following properties to it: If a melee weapon, increase range by 1. If a ranged weapon, increase range by 2.Increase poise damage by 1 if it’s a 5+ attack weapon, 2 if it’s a 3-4 attack weapon, and 3 if it’s a 2 or 1 attack weapon.  Apply 20 status application of any status (tier 1, so burn but not blue flame) if it’s a 5+ attack weapon, 30 status application if it’s a 3-4 attack weapon, and 50 status application if it’s a 2 or 1 attack weapon. Lower Stamina costs of any weapon ability this weapon does by 15 (Minimum 10 Stamina cost). Lower Focus costs of any weapon ability this weapon does by 10 (Minimum 10 Focus cost). ",
    },
    {
      name: "Protective Wall",
      focus: 75,
      properties: ["Yellow Bile", "Dry", "Hot", "Autumn", "Northern", "Liver"],
      materials: ["3 Salt", "1 Property"],
      description:
        "This can be used as a reaction. Create a wall in front of you, this launches enemies 3 squares up but they are not considered aerial as the wall is 3 squares. It also deals your catalyst’s damage. The wall has 20hp for every 1 wisdom you have, it has zero defense. Once it breaks, it is destroyed and the enemies on top fall and take fall damage if need be. This wall lasts until it is destroyed.  ",
    },
    {
      name: "Planted Earth",
      focus: 15,
      properties: ["None"],
      materials: ["1 Mercury"],
      description:
        "This is combined with another spell, implanting a transmutation spell on a square when you touch it. Anyone who steps on this gains the effect of the transmuted spell and its property. Upon the third step, it disappears.",
    },
    {
      name: "Reverse Gravity",
      focus: 30,
      properties: [
        "Directionless",
        "Northern",
        "Southern",
        "Yellow Bile",
        "Gallbladder",
        "Black Bile",
      ],
      materials: ["2 Mercury", "1 Property"],
      description:
        "Touch something or yourself, its gravity is reversed. It will now fall upwards until it touches something. It will fall 5 squares every turn with medium gravity. Lowering by 2 squares by each gravity step under medium gravity, with no change at zero gravity. And it is increased by x1.5 every step past medium gravity. They start falling either on activation or after the end of your turn, your choosing. This lasts 2 turns. ",
    },
    {
      name: "Unending Passage of Time",
      focus: 75,
      properties: ["Infancy", "Elderly", "Gender Neutral", "Eastern", "Choleric"],
      materials: ["3 Mercury", "2 Salt", "1 Property"],
      description:
        "This is a Touch-ranged spell using your catalyst’s hit. Touch an opponent and make them experience the decay of time, causing their bones to shrivel up. Deal 205 toxic application (Rot if it applies). Also until the end of this turn, they lose 10% damage.",
    },
    {
      name: "Natural Border",
      focus: 45,
      properties: ["Infancy", "Sanguine", "Gallbladder", "Youth", "Choleric", "Yellow Bile"],
      materials: ["4 Sulfur", "1 Property"],
      description:
        "Triple the resistances of a touched ally for 3 turns. If they suffer a status effect while buffed, they gain +20% damage.",
    },
    {
      name: "Tails of Fury",
      focus: 80,
      properties: ["Spring", "Feminine", "Adulthood", "Neither Dry or Wet", "Heart"],
      materials: ["3 Mercury", "2 Sulfur", "1 Property"],
      description:
        "As an action or an attack, you grow nine glowing tails of energy behind you. Everytime you heal, store 100 of the healing as a 5% damage bonus and a +2.5 application to whatever status you deal (round down) to your next attack. Once you attack, lose all of the tails.",
    },
    {
      name: "Noah’s Flood",
      focus: 65,
      properties: ["Wet", "Southern", "Gallbladder", "Spring", "Sanguine"],
      materials: ["5 Salt", "1 Property"],
      description:
        "Can only be used as a reaction. Quickly transmute the floor in front of you into a great cascade of water that pushes people off you. This deals 250% of your Catalyst’s damage and pushes 3 squares, plus an additional 1 square for every 20 Wisdom higher than their Endurance. Until the end of the turn, the enemy is now considered Drenched and will take double chill application.",
    },
    {
      name: "Spiraling Web",
      focus: 90,
      properties: ["Autumn", "Dry", "Neither cold or hot", "Phlegmatic", "Phlegm"],
      materials: ["2 Salt", "2 Mercury", "1 Property"],
      description:
        "Move your ring and middle finger backwards as you shoot a web forward. You can target any enemy within 8 squares of you, if you hit, then they take 180% of your Catalyst’s damage and immediately lose half their movement until the start of the next turn. Your web stays where it affected for 3 turns, it requires 2 movement to move through a square of the web. By spending an additional 15 Focus, you can pull the enemy adjacent to you with the Web as well, or you can pull yourself to the enemy.",
    },
  ];
//////////////////////////////
// 1) GEOMANCY SPELLS
//////////////////////////////
export const geomancySpells = [
  {
    name: "Glory of Strength!",
    focus: 50,
    properties: ["Masculine", "West", "Summer", "Youth", "Adulthood", "Heart"],
    materials: ["2 Mercury", "1 Property"],
    description:
      "Numerous statues of yourself but with exaggerated muscles appear in a 6x6 area. Allies within gain +15 temporary Strength and a +10 bonus to Strength/Endurance/Vitality rolls.",
  },
  {
    name: "Glory of Dexterity!",
    focus: 50,
    properties: ["Feminine", "East", "Spring", "Youth", "Infancy", "Spleen"],
    materials: ["2 Sulfur", "1 Property"],
    description:
      "Statues of a slimmer version of yourself appear in a 6x6 area. Allies within gain +15 temporary Dexterity and a +10 bonus to Dexterity/Speed/Skill rolls.",
  },
  {
    name: "Blood Rain",
    focus: 65,
    properties: ["Wet", "Liver", "Blood", "Sanguine", "Heart", "Southern"],
    materials: ["3 Salt", "1 Property"],
    description:
      "A 5x5 downpour of red rain. Bleed applications are boosted by +5 (or gain +10 if none). Whenever an enemy is bled, the lowest-HP ally is healed by the bleed damage dealt.",
  },
  {
    name: "Gaseous Bile",
    focus: 65,
    properties: ["Elderly", "Phlegm", "Gallbladder", "Choleric", "Black Bile"],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "A 5x5 area is filled with a toxic gas cloud. Toxic applications are boosted by +5 (or gain +10 if none). Whenever an enemy is inflicted with Toxic, 25% of the damage it takes is restored as Stamina to the lowest-stamina ally.",
  },
  {
    name: "Rise and Shine",
    focus: 40,
    properties: ["Autumn", "Northern", "Southern", "Gender-Neutral", "Gallbladder"],
    materials: ["2 Salt", "1 Property"],
    description:
      "As a reaction, raise a piece of earth under an enemy moving within range. Lift them a number of squares equal to 5 + your Alchemy mod, then drop them, causing normal or doubled fall damage if they're vulnerable.",
  },
  {
    name: "Gravitational Pull",
    focus: 60,
    properties: ["Southern", "Non-Existence", "Supine", "Melancholic", "Yellow Bile"],
    materials: ["2 Salt", "2 Sulfur", "1 Property"],
    description:
      "A 4x4 area intensifies gravity by +2 levels (or +1 on a high-gravity planet). Enemies lose 1 square of movement. Extreme planetary gravities can become dangerously high under this effect.",
  },
  {
    name: "Floating Palace",
    focus: 60,
    properties: ["Northern", "Phlegm", "Directionless", "Gallbladder", "Spring"],
    materials: ["2 Salt", "2 Mercury", "1 Property"],
    description:
      "A 6x6 area lessens gravity by 2 levels. If you drop below Zero Gravity, it becomes an even safer state. While airborne in this area, you gain +20% damage and +15 evasion.",
  },
  {
    name: "Environmental Development",
    focus: 0, // Not specified, you can set to 0 or remove
    properties: [], // Not specified in doc
    materials: ["1 Mercury", "1 Salt"],
    description:
      "While within a Geomancy construct, you can expend these materials so that when an enemy is Poise-broken, you apply 60 of any status. If it applies, you may immediately apply another 40 of a different status.",
  },
  {
    name: "Chosen by Freedom",
    focus: 75,
    properties: ["Western", "Eastern", "Autumn", "Cold", "Dry"],
    materials: ["4 Mercury", "1 Property"],
    description:
      "Create a 6x6 area of favorable winds. Allies in it gain +2 movement on their next action. If they move while attacking, they gain +1 move for that attack plus +10% damage per square traveled.",
  },
];

//////////////////////////////
// 2) NECROMANCY SPELLS
//////////////////////////////
export const necromancySpells = [
  // (Commander of Undead is more of a passive; skipping or add if you want)
  {
    name: "Corpse Explosion",
    focus: 50,
    properties: ["Black Bile", "Summer", "Hot", "Southern"],
    materials: ["2 Salt", "1 Sulfur", "1 Property"],
    description:
      "If a natural corpse is within 5 squares, cause it to explode for 200% Catalyst damage. The blast can chain to nearby corpses, each explosion using them up.",
  },
  {
    name: "Blood Siphon",
    focus: 40,
    properties: ["Blood", "Sanguine", "Youth", "Heart"],
    materials: ["2 Salt", "1 Mercury", "1 Property"],
    description:
      "Attack an enemy within 6 squares. On a hit, siphon blood to yourself or an ally within 6 squares of the enemy, healing 150% of the damage dealt.",
  },
  {
    name: "Ruptured Bones",
    focus: 40,
    properties: ["Elderly", "Dry", "Cold", "Southern"],
    materials: ["1 Salt", "1 Mercury", "1 Property"],
    description:
      "From a corpse within 5 squares, create bone spikes on the ground. Enemies stepping on or starting on them take Catalyst damage. As a free action, you can close the spikes, dealing your damage and destroying the corpse.",
  },
  {
    name: "Bone Spear",
    focus: 30,
    properties: ["Elderly", "Dry", "Northern", "Choleric"],
    materials: ["2 Salt", "1 Property"],
    description:
      "From a corpse within 10 squares, form a bone spear from its ribcage and shoot an enemy up to 5 squares from the corpse. Deals 125% Catalyst damage and 30 bone damage. Each corpse can create two spears before becoming unusable.",
  },
  {
    name: "Voices in your head, ZOMBIE",
    focus: 45,
    properties: ["Elderly", "Non-Existence", "Cold", "Black Bile", "Spleen"],
    materials: ["2 Mercury", "1 Property"],
    description:
      "Inflict the Zombie condition for 3 turns. Allies can willingly accept it, or you make an attack vs. an enemy. If it procs, the target is zombified for 3 turns, losing it if you cast again on them.",
  },
  {
    name: "Life Tap",
    focus: 70,
    properties: ["Infancy", "Spring", "Youth", "Sanguine", "Choleric"],
    materials: ["2 Mercury", "1 Property"],
    description:
      "Attack an enemy with your Catalyst. On a hit, they become Life Tapped until your next turn. Allies damaging that enemy heal 20 HP per 80 damage dealt (minimum 20 HP).",
  },
  {
    name: "Blood Rush",
    focus: 55,
    properties: ["Infancy", "Non-Existence", "Sanguine", "Blood", "Wet", "Heart"],
    materials: ["2 Mercury", "1 Salt", "1 Property"],
    description:
      "Leave your body behind as you rush forward in liquid form up to your move speed in a straight line. Every enemy you pass is attacked by your Catalyst for 0 damage but inflicted with 65 bleed application.",
  },
  {
    name: "Bone Armor",
    focus: 55,
    properties: ["Adulthood", "Gender Neutral", "Western", "Dry"],
    materials: ["2 Mercury", "1 Salt", "1 Property"],
    description:
      "If a corpse is adjacent, fuse its bones into your armor. Boost one Bone Defense by +75 and Physical Defense by +15 until the end of your third turn, consuming the corpse.",
  },
  {
    name: "Devour",
    focus: 0, // "None"
    properties: ["Directionless", "Autumn", "Winter", "Elderly", "Melancholic"],
    materials: ["5 Salt", "1 Property"],
    description:
      "Create a 5-square radius around you, consuming all corpses within. Gain 20 Focus per corpse devoured. Cannot use if you’re at 0 Focus.",
  },
  {
    name: "Frailty",
    focus: 55,
    properties: ["Directionless", "Autumn", "Winter", "Elderly", "Melancholic"],
    materials: ["2 Salt", "1 Property"],
    description:
      "A 5-square circle emanates from you. Non-boss enemies with ≤20% HP die instantly (increasing their corpse’s uses by 1). Non-boss enemies with ≤50% HP have half movement until end of turn.",
  },
  {
    name: "Void Reap",
    focus: 30,
    properties: ["Cold", "Autumn", "Non-Existence", "Alcohol", "Phlegmatic"],
    materials: ["2 Sulfur", "1 Property"],
    description:
      "Form a void scythe. Attack with your Catalyst as if it’s a Scythe (extended range), dealing 150% damage. Optionally apply a special tag based on materials used.",
  },
  {
    name: "Fate-Tied",
    focus: 45,
    properties: ["Gender-Neutral", "Masculine", "Feminine", "Phlegm", "Heart"],
    materials: ["3 Mercury", "1 Salt", "1 Property"],
    description:
      "Choose two allies within 8 squares. They share healing and damage taken for 2 turns. You can cancel this as a reaction. If you target an enemy with this effect, they'd presumably have to be forced (though doc doesn't say).",
  },
];

// ------------------------------------------------------------------
// 2) FULL Conjuration Spell List (with focus added)
// ------------------------------------------------------------------
export const conjurationSpells = [
  {
    name: "Fireball",
    focus: 50,
    properties: ["Summer", "Hot", "Dry", "Eastern"],
    materials: ["2 Sulfur", "1 Property"],
    description:
      "Shoot out a Fireball from your catalyst that deals 130% damage and applies 60 Burn in a small area.",
  },
  {
    name: "Firestorm",
    focus: 60,
    properties: ["Summer", "Hot", "Directionless", "Gallbladder"],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "Cause flame pillars to burst randomly within 3 squares, each dealing 200% damage. Pillars can stack if they spawn together.",
  },
  {
    name: "Flame, Grant me Strength",
    focus: 40,
    properties: ["Masculine", "Choleric", "Southern", "Yellow Bile"],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "Deal damage to yourself and inflict 200 Burn on yourself to gain +25% fire damage and +10 Burn application.",
  },
  {
    name: "Lingering Flame",
    focus: 65,
    properties: ["Dry", "Autumn", "Elderly", "Gallbladder"],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "Summon a flame that explodes in 3 turns or when someone crosses it, dealing 200% damage and 75 Burn.",
  },
  {
    name: "Sacred Flame",
    focus: 35,
    properties: ["Hot", "Dry", "Youth", "Choleric"],
    materials: ["2 Sulfur", "1 Property"],
    description:
      "A melee-range flame strike that deals normal damage plus 125 Burn.",
  },
  {
    name: "Flame Cloak",
    focus: 45,
    properties: ["Feminine", "Hot", "Phlegmatic", "Adulthood"],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "Create a cloak of fire around you for 3 turns, applying 45 Burn to enemies who enter or start within it.",
  },
  {
    name: "Ice Mist",
    focus: 45,
    properties: ["Winter", "Cold", "Wet", "Spring"],
    materials: ["3 Mercury", "1 Property"],
    description:
      "Create a cold mist that grants +25 Evasion but applies Chill (60 on entry, 40 each turn) to anyone who enters or remains inside.",
  },
  {
    name: "Thoron",
    focus: 65,
    properties: ["Spring", "Youth", "Northern", "Heart"],
    materials: ["3 Salt", "1 Property"],
    description:
      "Fire a piercing lightning bolt with sniper-like range that deals 180% damage and 50 Shock.",
  },
  {
    name: "Freezing Grasp",
    focus: 55,
    properties: ["Youth", "Winter", "Cold", "Spleen"],
    materials: ["2 Mercury", "1 Property"],
    description:
      "Melee attack that applies 80 Chill and drains 25% of the enemy’s Stamina, restoring your own by the same amount.",
  },
  {
    name: "Energy Hammer",
    focus: 45,
    properties: ["Adulthood", "Celestial", "Supine", "Sanguine"],
    materials: ["2 Sulfur", "1 Mercury", "1 Property"],
    description:
      "Send a pure energy hammer at an enemy, dealing 120% damage and 35 bone damage to a chosen bone.",
  },
  {
    name: "Dark Bringer",
    focus: 40,
    properties: ["Non-Existence", "Western", "Black Bile", "Melancholic"],
    materials: ["2 Salt", "1 Mercury", "1 Property"],
    description:
      "Shoot a void blast. If it hits, it teleports (pulls) the enemy adjacent to you.",
  },
  {
    name: "Blaze Battery",
    focus: 35,
    properties: ["Dry", "Yellow Bile", "Alcohol", "Phlegm"],
    materials: ["2 Sulfur", "1 Property"],
    description:
      "A stronger fireball that deals 3 additional Poise damage and 35 Burn. If it breaks poise, the enemy is immediately lit on fire.",
  },
  {
    name: "Cascade of Stars",
    focus: 85,
    properties: [
      "Northern",
      "Southern",
      "Celestial",
      "Supine",
      "Gallbladder",
      "Infancy",
      "Brain",
    ],
    materials: ["6 Salt", "1 Property"],
    description:
      "Create an 8x8 area of falling blue stars. Deals 150% damage plus 75 Toxic on cast and each turn (3 turns). Doubled if the target is Winded.",
  },
  {
    name: "Furious Blades of Caassimolar",
    focus: 110,
    properties: ["Blood", "Liver", "Heart", "Infancy", "Youth", "Sanguine"],
    materials: ["4 Mercury", "1 Saffron of Mars", "1 Property"],
    description:
      "Summon two X-shaped blood blades, each dealing 180% damage and 95 Bleed. Sacrifice 10% HP to increase to 220% damage and +140 Bleed per blade.",
  },
  {
    name: "Rotten Breath",
    focus: 65,
    properties: [
      "Yellow Bile",
      "Black Bile",
      "Masculine",
      "Alcohol",
      "Phlegm",
      "Spleen",
    ],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "Expel corrosive bile in a cone, dealing 133% damage and applying 95 Toxic (Rot).",
  },
  {
    name: "Tibil Triad",
    focus: 80,
    properties: ["Gender Neutral", "Melancholic", "Eastern", "Brain", "Elderly"],
    materials: ["2 Salt", "2 Mercury", "1 Property"],
    description:
      "A reaction that forms three magical blades behind you. Potentially dispels an incoming spell, and each blade can be fired for 50% damage + 35 of the last application.",
  },
  {
    name: "Storms of Berezaiti",
    focus: 165,
    properties: ["Cold", "Winter", "Feminine", "Directionless", "Melancholic"],
    materials: ["4 Salt", "1 Sulfur", "1 Property"],
    description:
      "Create a large Snow Tornado dealing 180% damage and 100 Chill. It can push or pull enemies 3 squares.",
  },
  {
    name: "Sij’s Ceaseless Singe",
    focus: 185,
    properties: ["Hot", "Summer", "Dry", "Alcohol", "Heart", "Non-Existence"],
    materials: ["4 Sulfur", "4 Mercury", "1 Property"],
    description:
      "Throw out black flames that cling to the target, dealing 220% damage and 155 Burn (becomes Black Flame). Moving inflicts extra flame ticks.",
  },
  
];
export const spellsBySchool: Record<string, Spell[]> = {
  Transmutation: transmutationSpells,
  Conjuration: conjurationSpells,
  Geomancy: geomancySpells,
  Necromancy: necromancySpells,
};