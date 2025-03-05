"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

// ------------------------------------------------------------------
// 1) FULL Transmutation Spell List (with focus added)
// ------------------------------------------------------------------
const transmutationSpells = [
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

// ------------------------------------------------------------------
// 2) FULL Conjuration Spell List (with focus added)
// ------------------------------------------------------------------
const conjurationSpells = [
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

// ------------------------------------------------------------------
// 4) One "allMaterials" array with per-school effects
// ------------------------------------------------------------------
// We unify each item so that `properties` remain the same,
// but the *effects* differ by school (Transmutation / Conjuration).
// If you have more schools (like Necromancy), add them to `effects`.
const allMaterials = [
  {
    name: "Alkaline Salt",
    properties: [
      "Neither cold or hot",
      "Dry",
      "Directionless",
      "Heart",
      "Supine",
      "Infancy",
      "Gender neutral",
    ],
    effects: {
      Transmutation: "Cleanse toxic and all toxic buildup when applying a buffing spell",
      Conjuration: "Lower damage of your spell by 10% but increase hit by +10",
    },
  },
  {
    name: "Alum",
    properties: ["Wet", "Cold", "Black Bile", "Southern", "Autumn", "Spring", "Yellow Bile"],
    effects: {
      Transmutation: "Boost stealth by +25 when applying a buffing spell",
      Conjuration: "Your attack also lowers the enemy’s movement speed by 2 until the end of their turn",
    },
  },
  {
    name: "Sal Ammoniac",
    properties: ["Hot", "Dry", "Eastern", "Phlegmatic", "Phlegm", "Wet", "Alcohol", "Summer"],
    effects: {
      Transmutation: "Give +50 Fire Defense when applying a buffing spell",
      Conjuration: "Boost fire spells’ damage by 20%",
    },
  },
  {
    name: "Antimony",
    properties: ["Northern", "Southern", "Heart", "Spleen", "Adulthood", "Summer", "Spring"],
    effects: {
      Transmutation: "Give +50 Lightning Defense when applying a buffing spell",
      Conjuration: "Boost lightning spells’ damage by 20%",
    },
  },
  {
    name: "Aqua Vitae",
    properties: ["Alcohol", "Supine", "Liver", "Adulthood", "Elderly", "Non-existence", "Directionless"],
    effects: {
      Transmutation: "Restore 50% health of the person you are buffing with a buffing spell",
      Conjuration: "Heal 25% of the damage you deal",
    },
  },
  {
    name: "Arsenic",
    properties: ["Elderly", "Non-Existence", "Dry", "Blood", "Melancholic", "Hot", "Brain"],
    effects: {
      Transmutation: "Any transmutation spell you cast on another individual deals 150 toxic build up",
      Conjuration: "Your attack deals 120 toxic buildup",
    },
  },
  {
    name: "Auripigmentum (Orpiment)",
    properties: ["Choleric", "Gallbladder", "Youth", "Infancy", "Blood", "Celestial", "Supine", "Feminine"],
    effects: {
      Transmutation: "Give +50 Energy Defense when applying a buffing spell",
      Conjuration: "Boost Energy spells’ damage by 20%",
    },
  },
  {
    name: "Bismuth Ore",
    properties: ["Eastern", "Western", "Southern", "Northern", "Directionless", "Masculine", "Spleen"],
    effects: {
      Transmutation:
        "If using a touch spell, you can apply it to another adjacent target for half the focus cost as the same action",
      Conjuration: "Increase the range of any AoE by an additional 1 to either length or width",
    },
  },
  {
    name: "Borax",
    properties: ["Cold", "Dry", "Winter", "Elderly", "Blood", "Alcohol", "Heart"],
    effects: {
      Transmutation: "Give +50 Cold Defense when applying a buffing spell",
      Conjuration: "Boost Cold spells’ damage by 20%",
    },
  },
  {
    name: "Calx (Chalk)",
    properties: ["Dry", "Youth", "Brain", "Feminine", "Autumn", "Sanguine", "Phlegm"],
    effects: {
      Transmutation:
        "In exchange for lowering the duration of a buffing spell by 50%, increase the spell’s effects by 25%",
      Conjuration: "Use 15 less focus when casting your spell",
    },
  },
  {
    name: "Cinnabar (Mercury Sulfide)",
    properties: ["Hot", "Dry", "Summer", "Masculine", "Sanguine", "Blood", "Liver"],
    effects: {
      Transmutation:
        "Cleanse burn buildup by 100 or if the target is already burning, cleanse the condition itself when using a buffing spell",
      Conjuration: "Give your attack 140 burn application or increase its burn application by 50%",
    },
  },
  {
    name: "Saffron of Mars (Hematite)",
    properties: ["Blood", "Sanguine", "Heart", "Liver", "Autumn", "Spring", "Youth", "Infancy"],
    effects: {
      Transmutation:
        "Cleanse bleed buildup by 150, or restore their health by however much your own bleed proc would do",
      Conjuration: "Give your attack 140 bleed application or increase its bleed application by 50%",
    },
  },
  {
    name: "Gold",
    properties: ["Western", "Yellow Bile", "Choleric", "Gallbladder", "Adulthood"],
    effects: {
      Transmutation: "Give 25% more damage or 20 more hit when using a buffing spell",
      Conjuration: "Deal 15% more damage with your spell but lose 10 hit",
    },
  },
  {
    name: "Dung",
    properties: ["Black Bile", "Southern", "Infancy", "Elderly", "Spleen", "Liver", "Gallbladder"],
    effects: {
      Transmutation: "Extend the length of your transmutation spells by 1 additional turn",
      Conjuration: "Extend the length of any of your time-based spells by 1 additional turn",
    },
  },
  {
    name: "Lodestone",
    properties: ["Northern", "Southern", "Black Bile", "Adulthood", "Masculine", "Feminine"],
    effects: {
      Transmutation:
        "If you are attempting to use a touch spell, you can now either move yourself to the person or pull them to you if they're within catalyst range",
      Conjuration: "If your spell hits, move the enemy 3 squares towards you",
    },
  },
  {
    name: "Oil",
    properties: ["Gender Neutral", "Hot", "Wet", "Non-Existence", "Phlegmatic", "Choleric"],
    effects: {
      Transmutation: "Give +20 evasion when using a buffing spell",
      Conjuration: "Gain 1 extra attack this action but each attack loses 25 hit",
    },
  },
  {
    name: "Quicklime",
    properties: ["Dry", "Northern", "Winter", "Adulthood", "Melancholic", "Directionless", "Gender-Neutral"],
    effects: {
      Transmutation: "Give health regeneration of 25% of their max health/turn when using a buffing spell",
      Conjuration: "The enemy hit by your spell cannot heal for 1 turn",
    },
  },
  {
    name: "Realgar",
    properties: ["Non-Existence", "Neither hot or cold", "Neither dry or wet", "Sanguine", "Blood", "Liver"],
    effects: {
      Transmutation:
        "Whenever you use a buffing spell, it now causes the individual it applies to bleed every turn while active",
      Conjuration: "If your attack inflicts bleed, double the bleed damage",
    },
  },
  {
    name: "Sal Gemmae (Rock Salt)",
    properties: ["Dry", "Gender-Neutral", "Heart", "Spring", "Celestial", "Infancy"],
    effects: {
      Transmutation: "Give 25% stamina regeneration when using a buffing spell",
      Conjuration: "Restore 25 stamina after using your spell",
    },
  },
  {
    name: "Soap",
    properties: ["Wet", "Feminine", "Phlegm", "Phlegmatic", "Spleen", "Supine"],
    effects: {
      Transmutation: "When using a buffing spell, cleanse all negative debuffs on the target",
      Conjuration: "If the enemy has a status effect, remove it but deal double damage",
    },
  },
  {
    name: "Urine",
    properties: [
      "Hot",
      "Wet",
      "Northern",
      "Spring",
      "Infancy",
      "Alcohol",
      "Liver",
      "Choleric",
      "Gallbladder",
      "Yellow Bile",
    ],
    effects: {
      Transmutation:
        "When using a buffing spell, increase one defense of your choosing by 75",
      Conjuration:
        "After your attack, the enemy loses 50 defense (for that damage type) for the next 3 turns",
    },
  },
  {
    name: "Verdigris",
    properties: ["Feminine", "Western", "Eastern", "Black Bile", "Yellow Bile", "Autumn"],
    effects: {
      Transmutation: "When using a buffing spell, decrease one defense of your choosing by 75",
      Conjuration: "Your attack ignores the defense of the enemy but not absorption",
    },
  },
  {
    name: "Wax",
    properties: ["Wet", "Hot", "Summer", "Masculine", "Celestial", "Heart", "Non-Existence"],
    effects: {
      Transmutation: "Give 25% focus regeneration when using a buffing spell",
      Conjuration: "Refund 50% of the Focus cost after casting your spell",
    },
  },
  {
    name: "Copper",
    properties: ["Northern", "Gallbladder", "Heart", "Elderly", "Summer", "Celestial", "Feminine"],
    effects: {
      Transmutation:
        "Cleanse shock buildup by 100 or if the target is already chilled, cleanse the condition itself when using a buffing spell",
      Conjuration: "Give your attack 140 shock application or increase its shock application by 50%",
    },
  },
  {
    name: "Iron",
    properties: ["Masculine", "Alcohol", "Blood", "Liver", "Sanguine", "Youth"],
    effects: {
      Transmutation:
        "When using a buffing spell, increase one defense of your choosing by 15% absorption",
      Conjuration:
        "After your attack, the enemy loses 10% absorption (of that damage type) for 3 turns",
    },
  },
  {
    name: "Tin",
    properties: ["Neither Dry or Wet", "Spleen", "Winter", "Black Bile", "Alcohol", "Eastern"],
    effects: {
      Transmutation: "When using a buffing spell, increase crit rate of your choosing by 20%",
      Conjuration:
        "Your crit rate is increased by 10% and your crit damage is increased by 25% for this attack",
    },
  },
  {
    name: "Lead",
    properties: ["Neither Hot or Cold", "Adulthood", "Western", "Yellow Bile", "Brain", "Liver"],
    effects: {
      Transmutation:
        "When using a buffing spell, increase one resistance of your choosing by 100",
      Conjuration:
        "After your attack, choose a resistance of the enemy, they lose 50 of that resistance",
    },
  },
];


// ------------------------------------------------------------------
// 5) The spells by school remain separate, but we unify the materials
// ------------------------------------------------------------------
const spellsBySchool: Record<string, typeof transmutationSpells> = {
  Transmutation: transmutationSpells,
  Conjuration: conjurationSpells,
};

// ------------------------------------------------------------------
// 6) The Main Component (with single "allMaterials" approach)
// ------------------------------------------------------------------
export default function AlchemySpellSelector() {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [selectedSpell, setSelectedSpell] = useState<{
    name: string;
    focus: number;
    properties: string[];
    materials: string[];
    description: string;
  } | null>(null);

  const [availableMaterials, setAvailableMaterials] = useState<
    {
      name: string;
      properties: string[];
      effects: {
        Transmutation?: string;
        Conjuration?: string;
        // If more schools, add them here
      };
    }[]
  >([]);

  // Filter the single "allMaterials" array for those that share any property
  // with the chosen spell. Then we display the relevant "effects[selectedSchool]"
  const findMatchingMaterials = (
    spell:
      | {
          name: string;
          focus: number;
          properties: string[];
          materials: string[];
          description: string;
        }
      | null,
    school: string | null
  ) => {
    if (!spell || !school) return [];
    return allMaterials.filter((material) =>
      material.properties.some((prop) => spell.properties.includes(prop))
    );
  };

  const handleSchoolChange = (schoolName: string) => {
    setSelectedSchool(schoolName);
    setSelectedSpell(null);
    setAvailableMaterials([]);
  };

  const handleSpellChange = (spellName: string) => {
    if (!selectedSchool) return;
    const spells = spellsBySchool[selectedSchool] || [];
    const spell = spells.find((s) => s.name === spellName) || null;
    setSelectedSpell(spell);

    if (!spell) {
      setAvailableMaterials([]);
      return;
    }
    // Gather matching materials from the unified list
    const matching = findMatchingMaterials(spell, selectedSchool);
    setAvailableMaterials(matching);
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Alchemy Spell Selector</CardTitle>
        <CardDescription>
          Select a School of Alchemy, then pick a spell to see its focus cost
          and matching material enhancements.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* 1) Choose School */}
          <Select onValueChange={handleSchoolChange}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a School" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(spellsBySchool).map((school) => (
                <SelectItem key={school} value={school}>
                  {school}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* 2) Choose Spell */}
          {selectedSchool && (
            <Select onValueChange={handleSpellChange}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a Spell" />
              </SelectTrigger>
              <SelectContent>
                {spellsBySchool[selectedSchool].map((spell) => (
                  <SelectItem key={spell.name} value={spell.name}>
                    {spell.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {/* 3) Show Spell Details + Materials */}
          {selectedSpell && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">{selectedSpell.name}</h3>

              {/* Display the Focus here */}
              <p className="text-sm font-medium mb-1">
                <strong>Focus:</strong> {selectedSpell.focus}
              </p>

              <p className="text-sm text-gray-600 mb-3">
                {selectedSpell.description}
              </p>

              <div className="mb-3">
                <strong>Spell Properties:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedSpell.properties.map((prop) => (
                    <Badge key={prop} variant="secondary">
                      {prop}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <strong>Required Materials:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedSpell.materials.map((mat) => (
                    <Badge key={String(mat)} variant="outline">
                      {mat}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Matching Materials + effect for selectedSchool */}
              <h4 className="text-md font-semibold mt-4 mb-2">
                Matching Material Enhancements:
              </h4>
              {availableMaterials.length > 0 ? (
                <div className="space-y-2">
                  {availableMaterials.map((material) => {
                    // Show the effect for whichever school is chosen
                    const effectForSchool =
                      selectedSchool && (selectedSchool === 'Transmutation' || selectedSchool === 'Conjuration')
                        ? material.effects[selectedSchool]
                        : "No effect listed.";

                    return (
                      <Card key={material.name} className="p-3 bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold">{material.name}</h5>
                            <p className="text-sm text-gray-600">
                              {effectForSchool}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1 max-w-[200px]">
                            {material.properties.map((prop) => (
                              <Badge
                                key={prop}
                                variant="secondary"
                                className="text-xs"
                              >
                                {prop}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  No matching material enhancements found.
                </p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
