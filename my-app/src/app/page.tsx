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


const transmutationSpells = [
  {
    name: "Give me, Strength",
    properties: ["Western", "Adulthood", "Sanguine", "Masculine"],
    materials: ["2 Salt", "1 Property"],
    description:
      "Touch yourself or an adjacent ally, give them 35 temporary STR until the end of their second turn.",
  },
  {
    name: "Give me, Dexterity",
    properties: ["Eastern", "Youth", "Phlegmatic", "Feminine"],
    materials: ["2 Mercury", "1 Property"],
    description:
      "Touch yourself or an adjacent ally, give them 35 temporary DEX until the end of their second turn.",
  },
  {
    name: "Altered Self",
    properties: ["Phlegm", "Phlegmatic", "Yellow Bile", "Black Bile"],
    materials: ["3 Mercury", "1 Property"],
    description:
      "Touch yourself or an adjacent ally. Choose two of the following buffs: +10 to hit, +10% damage, or +10 evasion until the end of their second turn.",
  },
  {
    name: "Earthbind",
    properties: ["Dry", "Southern", "Autumn", "Liver"],
    materials: ["2 Salt", "1 Property"],
    description:
      "Strike a flying enemy from below, dealing extra aerial poise damage and forcing them to fall if their aerial poise is broken.",
  },
  {
    name: "Polymorph",
    properties: ["Phlegmatic", "Infancy", "Blood", "Brain"],
    materials: ["3 Mercury", "1 Property"],
    description:
      "Touch yourself or an adjacent ally, transforming them into a creature or being of your choosing for up to an hour.",
  },
  {
    name: "Fleet-Footed",
    properties: ["Youth", "Liver", "Gender Neutral", "Neither Hot or Cold"],
    materials: ["1 Sulfur", "1 Salt", "1 Property"],
    description:
      "Touch yourself or an adjacent ally, doubling their movement speed until the end of their turn.",
  },
  {
    name: "Lesser Wings",
    properties: ["Sanguine", "Feminine", "Spleen", "Northern"],
    materials: ["1 Sulfur", "1 Mercury", "1 Property"],
    description:
      "Touch yourself or an adjacent ally, granting temporary wings that last until the end of your second turn.",
  },
  {
    name: "Prestidigitation",
    properties: ["Spring", "Directionless", "Gender Neutral", "Neither Dry or Wet"],
    materials: ["1 Salt", "1 Property"],
    description:
      "Create a minor illusion or trick using an Alchemy vs. Perception check to fool observers.",
  },
  {
    name: "One with Nature",
    properties: ["Neither cold or hot", "Yellow Bile", "Phlegm", "Sanguine"],
    materials: ["1 Sulfur", "1 Salt", "1 Property"],
    description:
      "Grow camouflage to gain a +25 Stealth bonus until you leave stealth.",
  },
  {
    name: "Barkskin",
    properties: ["Dry", "Spring", "Masculine", "Adulthood"],
    materials: ["2 Salt", "1 Property"],
    description:
      "Touch yourself or an adjacent ally, granting 40 temporary Slashing and Piercing defense until the end of their third turn.",
  },
  {
    name: "Featherfall",
    properties: ["Cold", "Gallbladder", "Spring", "Liver"],
    materials: ["1 Sulfur", "1 Property"],
    description:
      "Use as a reaction when someone is about to fall, negating all fall damage.",
  },
  {
    name: "Gaseous Form",
    properties: ["Alcohol", "Phlegmatic", "Neither wet or dry", "Neither hot or cold"],
    materials: ["2 Mercury", "1 Property"],
    description:
      "Use as a reaction, turning yourself into a gas. You’re immune to physical damage for one attack and gain +30 evasion vs. elemental attacks.",
  },
  {
    name: "Alter Weapon",
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
      "Enhance a weapon with +10 to hit and +10% damage. You can also add one of five special bonuses (e.g. increased range, status application, etc.).",
  },
  {
    name: "Protective Wall",
    properties: ["Yellow Bile", "Dry", "Hot", "Autumn", "Northern", "Liver"],
    materials: ["3 Salt", "1 Property"],
    description:
      "Use as a reaction to create a wall. It can lift enemies, has HP based on your Wisdom, and stays until destroyed.",
  },
  {
    name: "Planted Earth",
    properties: ["None"],
    materials: ["1 Mercury"],
    description:
      "Combine this with another Transmutation spell, implanting it into a square so that the next person who steps there is affected.",
  },
  {
    name: "Reverse Gravity",
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
      "Touch a target to invert their gravity for 2 turns, causing them to fall upward unless something stops them.",
  },
  {
    name: "Unending Passage of Time",
    properties: ["Infancy", "Elderly", "Gender Neutral", "Eastern", "Choleric"],
    materials: ["3 Mercury", "2 Salt", "1 Property"],
    description:
      "Touch an opponent, dealing 205 Toxic (Rot if applied) and making them shrivel, losing 10% damage until the end of this turn.",
  },
  {
    name: "Natural Border",
    properties: ["Infancy", "Sanguine", "Gallbladder", "Youth", "Choleric", "Yellow Bile"],
    materials: ["4 Sulfur", "1 Property"],
    description:
      "Triple the resistances of a touched ally for 3 turns. If they suffer a status effect while buffed, they gain +20% damage.",
  },
  {
    name: "Tails of Fury",
    properties: ["Spring", "Feminine", "Adulthood", "Neither Dry or Wet", "Heart"],
    materials: ["3 Mercury", "2 Sulfur", "1 Property"],
    description:
      "Grow nine glowing tails of energy behind you. Whenever you receive healing, store bonus damage and status application for your next attack.",
  },
  {
    name: "Noah’s Flood",
    properties: ["Wet", "Southern", "Gallbladder", "Spring", "Sanguine"],
    materials: ["5 Salt", "1 Property"],
    description:
      "Use as a reaction to create a cascade of water that deals 250% Catalyst damage, pushes enemies back, and drenches them.",
  },
  {
    name: "Spiraling Web",
    properties: ["Autumn", "Dry", "Neither cold or hot", "Phlegmatic", "Phlegm"],
    materials: ["2 Salt", "2 Mercury", "1 Property"],
    description:
      "Shoot a web up to 8 squares away, dealing 180% Catalyst damage and halving the enemy’s movement. The web stays for 3 turns.",
  },
];

// ------------------------------------------------------------------
// 2) FULL Conjuration Spell List (from “Exceliates - Conjuration”)
// ------------------------------------------------------------------
const conjurationSpells = [
  {
    name: "Fireball",
    properties: ["Summer", "Hot", "Dry", "Eastern"],
    materials: ["2 Sulfur", "1 Property"],
    description:
      "Shoot out a Fireball from your catalyst that deals 130% damage and applies 60 Burn in a small area.",
  },
  {
    name: "Firestorm",
    properties: ["Summer", "Hot", "Directionless", "Gallbladder"],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "Cause flame pillars to burst randomly within 3 squares, each dealing 200% damage. Pillars can stack if they spawn together.",
  },
  {
    name: "Flame, Grant me Strength",
    properties: ["Masculine", "Choleric", "Southern", "Yellow Bile"],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "Deal damage to yourself and inflict 200 Burn on yourself to gain +25% fire damage and +10 Burn application.",
  },
  {
    name: "Lingering Flame",
    properties: ["Dry", "Autumn", "Elderly", "Gallbladder"],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "Summon a flame that explodes in 3 turns or when someone crosses it, dealing 200% damage and 75 Burn.",
  },
  {
    name: "Sacred Flame",
    properties: ["Hot", "Dry", "Youth", "Choleric"],
    materials: ["2 Sulfur", "1 Property"],
    description:
      "A melee-range flame strike that deals normal damage plus 125 Burn.",
  },
  {
    name: "Flame Cloak",
    properties: ["Feminine", "Hot", "Phlegmatic", "Adulthood"],
    materials: ["3 Sulfur", "1 Property"],
    description:
      "Create a cloak of fire around you for 3 turns, applying 45 Burn to enemies who enter or start within it.",
  },
  {
    name: "Ice Mist",
    properties: ["Winter", "Cold", "Wet", "Spring"],
    materials: ["3 Mercury", "1 Property"],
    description:
      "Create a cold mist that grants +25 Evasion but applies Chill (60 on entry, 40 each turn) to anyone who enters or remains inside.",
  },
  {
    name: "Thoron",
    properties: ["Spring", "Youth", "Northern", "Heart"],
    materials: ["3 Salt", "1 Property"],
    description:
      "Fire a piercing lightning bolt with sniper-like range that deals 180% damage and 50 Shock.",
  },
  {
    name: "Freezing Grasp",
    properties: ["Youth", "Winter", "Cold", "Spleen"],
    materials: ["2 Mercury", "1 Property"],
    description:
      "Melee attack that applies 80 Chill and drains 25% of the enemy’s Stamina, restoring your own by the same amount.",
  },
  {
    name: "Energy Hammer",
    properties: ["Adulthood", "Celestial", "Supine", "Sanguine"],
    materials: ["2 Sulfur", "1 Mercury", "1 Property"],
    description:
      "Send a pure energy hammer at an enemy, dealing 120% damage and 35 bone damage to a chosen bone.",
  },
  {
    name: "Dark Bringer",
    properties: ["Non-Existence", "Western", "Black Bile", "Melancholic"],
    materials: ["2 Salt", "1 Mercury", "1 Property"],
    description:
      "Shoot a void blast. If it hits, it teleports (pulls) the enemy adjacent to you.",
  },
  {
    name: "Blaze Battery",
    properties: ["Dry", "Yellow Bile", "Alcohol", "Phlegm"],
    materials: ["2 Sulfur", "1 Property"],
    description:
      "A stronger fireball that deals 3 additional Poise damage and 35 Burn. If it breaks poise, the enemy is immediately lit on fire.",
  },
  {
    name: "Cascade of Stars",
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
    properties: ["Blood", "Liver", "Heart", "Infancy", "Youth", "Sanguine"],
    materials: ["4 Mercury", "1 Saffron of Mars", "1 Property"],
    description:
      "Summon two X-shaped blood blades, each dealing 180% damage and 95 Bleed. Sacrifice 10% HP to increase to 220% damage and +140 Bleed per blade.",
  },
  {
    name: "Rotten Breath",
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
    properties: ["Gender Neutral", "Melancholic", "Eastern", "Brain", "Elderly"],
    materials: ["2 Salt", "2 Mercury", "1 Property"],
    description:
      "A reaction that forms three magical blades behind you. Potentially dispels an incoming spell, and each blade can be fired for 50% damage + 35 of the last application.",
  },
  {
    name: "Storms of Berezaiti",
    properties: ["Cold", "Winter", "Feminine", "Directionless", "Melancholic"],
    materials: ["4 Salt", "1 Sulfur", "1 Property"],
    description:
      "Create a large Snow Tornado dealing 180% damage and 100 Chill. It can push or pull enemies 3 squares.",
  },
  {
    name: "Sij’s Ceaseless Singe",
    properties: ["Hot", "Summer", "Dry", "Alcohol", "Heart", "Non-Existence"],
    materials: ["4 Sulfur", "4 Mercury", "1 Property"],
    description:
      "Throw out black flames that cling to the target, dealing 220% damage and 155 Burn (becomes Black Flame). Moving inflicts extra flame ticks.",
  },
];



// Materials used in Transmutation
// (only listing the doc’s “Transmutation” effect)
const transmutationMaterials = [
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
    effect: "Cleanse toxic and all toxic buildup when applying a buffing spell",
  },
  {
    name: "Alum",
    properties: ["Wet", "Cold", "Black Bile", "Southern", "Autumn", "Spring", "Yellow Bile"],
    effect: "Boost stealth by +25 when applying a buffing spell",
  },
  {
    name: "Sal Ammoniac",
    properties: ["Hot", "Dry", "Eastern", "Phlegmatic", "Phlegm", "Wet", "Alcohol", "Summer"],
    effect: "Give +50 Fire Defense when applying a buffing spell",
  },
  {
    name: "Aqua Vitae",
    properties: ["Alcohol", "Supine", "Liver", "Adulthood", "Elderly", "Non-existence", "Directionless"],
    effect: "Restore 50% health of the person you are buffing with a buffing spell",
  },
  {
    name: "Oil",
    properties: ["Gender Neutral", "Hot", "Wet", "Non-Existence", "Phlegmatic", "Choleric"],
    effect: "Give +20 evasion when using a buffing spell",
  },
  {
    name: "Quicklime",
    properties: ["Dry", "Northern", "Winter", "Adulthood", "Melancholic", "Directionless", "Gender-Neutral"],
    effect: "Give health regeneration of 25% max HP/turn when using a buffing spell",
  },
  {
    name: "Realgar",
    properties: ["Non-Existence", "Neither hot or cold", "Neither dry or wet", "Sanguine", "Blood", "Liver"],
    effect: "Whenever you use a buffing spell, it causes the target to bleed each turn while active",
  },
  {
    name: "Sal Gemmae",
    properties: ["Dry", "Gender-Neutral", "Heart", "Spring", "Celestial", "Infancy"],
    effect: "Give 25% stamina regeneration when using a buffing spell",
  },
  {
    name: "Soap",
    properties: ["Wet", "Feminine", "Phlegm", "Phlegmatic", "Spleen", "Supine"],
    effect: "When using a buffing spell, cleanse all negative debuffs on the target",
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
    effect: "When using a buffing spell, increase one defense of your choosing by 75",
  },
  {
    name: "Wax",
    properties: ["Wet", "Hot", "Summer", "Masculine", "Celestial", "Heart", "Non-Existence"],
    effect: "Give 25% focus regeneration when using a buffing spell",
  },
];

// Materials used in Conjuration
// (only listing the doc’s “Conjuration:” effect)
const conjurationMaterials = [
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
    effect: "Lower damage of your spell by 10% but increase hit by +10",
  },
  {
    name: "Alum",
    properties: ["Wet", "Cold", "Black Bile", "Southern", "Autumn", "Spring", "Yellow Bile"],
    effect: "Your attack also lowers the enemy’s movement speed by 2 until the end of their turn",
  },
  {
    name: "Sal Ammoniac",
    properties: ["Hot", "Dry", "Eastern", "Phlegmatic", "Phlegm", "Wet", "Alcohol", "Summer"],
    effect: "Boost fire spells’ damage by 20%",
  },
  {
    name: "Aqua Vitae",
    properties: ["Alcohol", "Supine", "Liver", "Adulthood", "Elderly", "Non-existence", "Directionless"],
    effect: "Heal 25% of the damage you deal",
  },
  {
    name: "Oil",
    properties: ["Gender Neutral", "Hot", "Wet", "Non-Existence", "Phlegmatic", "Choleric"],
    effect: "Gain 1 extra attack this action but each attack loses 25 hit",
  },
  {
    name: "Quicklime",
    properties: ["Dry", "Northern", "Winter", "Adulthood", "Melancholic", "Directionless", "Gender-Neutral"],
    effect: "The enemy hit by your spell cannot heal for 1 turn",
  },
  {
    name: "Realgar",
    properties: ["Non-Existence", "Neither hot or cold", "Neither dry or wet", "Sanguine", "Blood", "Liver"],
    effect: "If your attack inflicts bleed, double the bleed damage",
  },
  {
    name: "Sal Gemmae",
    properties: ["Dry", "Gender-Neutral", "Heart", "Spring", "Celestial", "Infancy"],
    effect: "Restore 25 stamina after using your spell",
  },
  {
    name: "Soap",
    properties: ["Wet", "Feminine", "Phlegm", "Phlegmatic", "Spleen", "Supine"],
    effect: "If the enemy has a status effect, remove it but deal double damage",
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
    effect:
      "After your attack, the enemy loses 50 defense (for that damage type) for the next 3 turns",
  },
  {
    name: "Wax",
    properties: ["Wet", "Hot", "Summer", "Masculine", "Celestial", "Heart", "Non-Existence"],
    effect: "Refund 50% of the Focus cost after casting your spell",
  },
];

// ------------------------------------------------------------------
// 4) Utility: Organize spells & materials by School
// ------------------------------------------------------------------
const spellsBySchool: Record<string, typeof transmutationSpells> = {
  Transmutation: transmutationSpells,
  Conjuration: conjurationSpells,
};

const materialsBySchool: Record<string, typeof transmutationMaterials> = {
  Transmutation: transmutationMaterials,
  Conjuration: conjurationMaterials,
};

// ------------------------------------------------------------------
// 5) The Main Component
// ------------------------------------------------------------------
const AlchemySpellSelector = () => {
  // (A) Which School is currently chosen?
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  // (B) Which Spell is currently chosen (within that school)?
  const [selectedSpell, setSelectedSpell] = useState<{
    name: string;
    properties: string[];
    materials: string[];
    description: string;
  } | null>(null);

  // (C) Materials that match the chosen spell (based on shared properties)
  const [availableMaterials, setAvailableMaterials] = useState<{
    name: string;
    properties: string[];
    effect: string;
  }[]>([]);

  // Helper: find all materials (for this school) that share any property with the spell
  const findMatchingMaterials = (
    spell:
      | {
          name: string;
          properties: string[];
          materials: string[];
          description: string;
        }
      | null,
    school: string | null
  ) => {
    if (!spell || !school) return [];
    const relevantMaterials = materialsBySchool[school] || [];
    return relevantMaterials.filter((material) =>
      material.properties.some((prop) => spell.properties.includes(prop))
    );
  };

  // When user picks a school, reset the spell selection
  const handleSchoolChange = (schoolName: string) => {
    setSelectedSchool(schoolName);
    setSelectedSpell(null);
    setAvailableMaterials([]);
  };

  // When user picks a spell, find matching materials
  const handleSpellChange = (spellName: string) => {
    if (!selectedSchool) return;
    const spells = spellsBySchool[selectedSchool];
    const spell = spells.find((s) => s.name === spellName) || null;
    setSelectedSpell(spell);
    setAvailableMaterials(findMatchingMaterials(spell, selectedSchool));
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Alchemy Spell Selector</CardTitle>
        <CardDescription>
          Select a School of Alchemy, then pick a spell to see matching
          material enhancements.
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

          {/* 2) Choose Spell (only if a school has been chosen) */}
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

          {/* 3) Show Spell Details + Matching Materials */}
          {selectedSpell && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">{selectedSpell.name}</h3>
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

              <h4 className="text-md font-semibold mt-4 mb-2">
                Matching Material Enhancements:
              </h4>
              {availableMaterials.length > 0 ? (
                <div className="space-y-2">
                  {availableMaterials.map((material) => (
                    <Card key={material.name} className="p-3 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-semibold">{material.name}</h5>
                          <p className="text-sm text-gray-600">
                            {material.effect}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {material.properties.map((prop) => (
                            <Badge
                              key={String(prop)}
                              variant="secondary"
                              className="text-xs"
                            >
                              {prop}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
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
};

export default AlchemySpellSelector;
