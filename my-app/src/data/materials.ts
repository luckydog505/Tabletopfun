export type Material = {
  name: string;
  properties: string[];
  effects: {
    Transmutation: string;
    Conjuration: string;
    Geomancy: string;
    Necromancy: string;
  };
};

export const allMaterials = [
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
      Transmutation:
        "Cleanse toxic and all toxic buildup when applying a buffing spell",
      Conjuration:
        "Lower damage of your spell by 10% but increase hit by +10",
      Geomancy:
        "Any allies (and yourself) within your geomancy constructs lose 75 toxic buildup per turn",
      Necromancy:
        "Any healing you give also lowers toxic buildup by 100",
    },
  },
  {
    name: "Alum",
    properties: [
      "Wet",
      "Cold",
      "Black Bile",
      "Southern",
      "Autumn",
      "Spring",
      "Yellow Bile",
    ],
    effects: {
      Transmutation:
        "Boost stealth by +25 when applying a buffing spell",
      Conjuration:
        "Your attack also lowers the enemy’s movement speed by 2 until the end of their turn",
      Geomancy:
        "Boost the stealth of all allies (and yourself) within your geomancy constructs by +10",
      Necromancy:
        "When using a corpse, you can give yourself +25 stealth until the end of your next turn",
    },
  },
  {
    name: "Sal Ammoniac",
    properties: [
      "Hot",
      "Dry",
      "Eastern",
      "Phlegmatic",
      "Phlegm",
      "Wet",
      "Alcohol",
      "Summer",
    ],
    effects: {
      Transmutation:
        "Give +50 Fire Defense when applying a buffing spell",
      Conjuration:
        "Boost fire spells’ damage by 20%",
      Geomancy:
        "Boost the fire damage done within your geomancy constructs by 10%",
      Necromancy:
        "Any healing you give also lowers burn buildup by 100",
    },
  },
  {
    name: "Antimony",
    properties: [
      "Northern",
      "Southern",
      "Heart",
      "Spleen",
      "Adulthood",
      "Summer",
      "Spring",
    ],
    effects: {
      Transmutation:
        "Give +50 Lightning Defense when applying a buffing spell",
      Conjuration:
        "Boost lightning spells’ damage by 20%",
      Geomancy:
        "Boost the lightning damage done within your geomancy constructs by 10%",
      Necromancy:
        "Any healing you give also lowers shock buildup by 100",
    },
  },
  {
    name: "Aqua Vitae",
    properties: [
      "Alcohol",
      "Supine",
      "Liver",
      "Adulthood",
      "Elderly",
      "Non-existence",
      "Directionless",
    ],
    effects: {
      Transmutation:
        "Restore 50% health of the person you are buffing with a buffing spell",
      Conjuration:
        "Heal 25% of the damage you deal",
      Geomancy:
        "Allies within your geomancy constructs heal 10% of their health every turn",
      Necromancy:
        "Any healing spells you use heal an additional 50%",
    },
  },
  {
    name: "Arsenic",
    properties: [
      "Elderly",
      "Non-Existence",
      "Dry",
      "Blood",
      "Melancholic",
      "Hot",
      "Brain",
    ],
    effects: {
      Transmutation:
        "Any transmutation spell you cast on another individual deals 150 toxic buildup",
      Conjuration:
        "Your attack deals 120 toxic buildup",
      Geomancy:
        "Everyone within your geomancy construct gains 70 toxic buildup every turn",
      Necromancy:
        "Any corpse you use gives 100 toxic buildup to everyone within corpse explosion range",
    },
  },
  {
    name: "Auripigmentum (Orpiment)",
    properties: [
      "Choleric",
      "Gallbladder",
      "Youth",
      "Infancy",
      "Blood",
      "Celestial",
      "Supine",
      "Feminine",
    ],
    effects: {
      Transmutation:
        "Give +50 Energy Defense when applying a buffing spell",
      Conjuration:
        "Boost Energy spells’ damage by 20%",
      Geomancy:
        "Boost the Energy damage done within your geomancy constructs by 10%",
      Necromancy:
        "Change the damage type of any void attacks to energy",
    },
  },
  {
    name: "Bismuth Ore",
    properties: [
      "Eastern",
      "Western",
      "Southern",
      "Northern",
      "Directionless",
      "Masculine",
      "Spleen",
    ],
    effects: {
      Transmutation:
        "If using a touch spell, you can apply it to another adjacent target for half the focus cost as the same action",
      Conjuration:
        "Increase the range of any AoE by 1 (either length or width)",
      Geomancy:
        "Increase the size of any geomancy construct by 1 in both length and width",
      Necromancy:
        "Increase the size of any circle spells by 1 square",
    },
  },
  {
    name: "Borax",
    properties: [
      "Cold",
      "Dry",
      "Winter",
      "Elderly",
      "Blood",
      "Alcohol",
      "Heart",
    ],
    effects: {
      Transmutation:
        "Give +50 Cold Defense when applying a buffing spell",
      Conjuration:
        "Boost Cold spells’ damage by 20%",
      Geomancy:
        "Boost the Cold damage done within your geomancy constructs by 10%",
      Necromancy:
        "Any healing you give also lowers chill buildup by 100",
    },
  },
  {
    name: "Calx (Chalk)",
    properties: [
      "Dry",
      "Youth",
      "Brain",
      "Feminine",
      "Autumn",
      "Sanguine",
      "Phlegm",
    ],
    effects: {
      Transmutation:
        "In exchange for lowering the duration of a buffing spell by 50%, increase the spell’s effects by 25%",
      Conjuration:
        "Use 15 less focus when casting your spell",
      Geomancy:
        "Any focus usage within your geomancy constructs is lowered by 20%",
      Necromancy:
        "Increase the effects of any circle spells by 25%",
    },
  },
  {
    name: "Cinnabar (Mercury Sulfide)",
    properties: [
      "Hot",
      "Dry",
      "Summer",
      "Masculine",
      "Sanguine",
      "Blood",
      "Liver",
    ],
    effects: {
      Transmutation:
        "Cleanse burn buildup by 100 or, if target is burning, cleanse the condition itself",
      Conjuration:
        "Give your attack 140 burn application or increase its burn application by 50%",
      Geomancy:
        "Everyone within your geomancy construct gains 75 burn buildup per turn",
      Necromancy:
        "Any corpse you use gives 100 burn buildup to everyone within corpse explosion range",
    },
  },
  {
    name: "Saffron of Mars (Hematite)",
    properties: [
      "Blood",
      "Sanguine",
      "Heart",
      "Liver",
      "Autumn",
      "Spring",
      "Youth",
      "Infancy",
    ],
    effects: {
      Transmutation:
        "Cleanse bleed buildup by 150, or restore their health by however much your own bleed proc would do",
      Conjuration:
        "Give your attack 140 bleed application or increase its bleed application by 50%",
      Geomancy:
        "Everyone within your geomancy construct gains 75 bleed buildup per turn",
      Necromancy:
        "Any corpse you use gives 100 bleed buildup to everyone within corpse explosion range; if the spell deals with blood, boost its effects by 50%",
    },
  },
  {
    name: "Gold",
    properties: ["Western", "Yellow Bile", "Choleric", "Gallbladder", "Adulthood"],
    effects: {
      Transmutation:
        "Give 25% more damage or +20 hit when using a buffing spell",
      Conjuration:
        "Deal 15% more damage with your spell but lose 10 hit",
      Geomancy:
        "Everyone within your geomancy construct gains 10% more damage or +10 hit",
      Necromancy:
        "Whenever you heal someone using a spell, also boost their Exceliates bar by 25%",
    },
  },
  {
    name: "Dung",
    properties: [
      "Black Bile",
      "Southern",
      "Infancy",
      "Elderly",
      "Spleen",
      "Liver",
      "Gallbladder",
    ],
    effects: {
      Transmutation:
        "Extend the length of your transmutation spells by 1 additional turn",
      Conjuration:
        "Extend the length of any of your time-based spells by 1 additional turn",
      Geomancy:
        "Extend the length of your geomancy constructs by 1 additional turn",
      Necromancy:
        "Gain a 25% chance to not use up a corpse",
    },
  },
  {
    name: "Lodestone",
    properties: [
      "Northern",
      "Southern",
      "Black Bile",
      "Adulthood",
      "Masculine",
      "Feminine",
    ],
    effects: {
      Transmutation:
        "If using a touch spell, you can move yourself to the target or pull them to you if within range",
      Conjuration:
        "If your spell hits, move the enemy 3 squares towards you",
      Geomancy:
        "At the start of every turn, everyone in the geomancy construct is pushed 3 squares toward the center",
      Necromancy:
        "Whenever using a void-damaging move, you can pull the enemy up to your Catalyst’s range in any direction",
    },
  },
  {
    name: "Oil",
    properties: [
      "Gender Neutral",
      "Hot",
      "Wet",
      "Non-Existence",
      "Phlegmatic",
      "Choleric",
    ],
    effects: {
      Transmutation:
        "Give +20 evasion when using a buffing spell",
      Conjuration:
        "Gain 1 extra attack this action but each attack loses 25 hit",
      Geomancy:
        "Every time someone moves in your geomancy construct, they slide 1 extra square per square moved",
      Necromancy:
        "When using a healing spell, give +10 evasion to the target until the end of your next turn",
    },
  },
  {
    name: "Quicklime",
    properties: [
      "Dry",
      "Northern",
      "Winter",
      "Adulthood",
      "Melancholic",
      "Directionless",
      "Gender-Neutral",
    ],
    effects: {
      Transmutation:
        "Give health regeneration of 25% max HP/turn when using a buffing spell",
      Conjuration:
        "The enemy hit by your spell cannot heal for 1 turn",
      Geomancy:
        "Anyone in your geomancy construct can now gain temporary HP above 100% when healed (up to +50%)",
      Necromancy:
        "Whenever using a corpse spell, double its effect on a single corpse",
    },
  },
  {
    name: "Realgar",
    properties: [
      "Non-Existence",
      "Neither hot or cold",
      "Neither dry or wet",
      "Sanguine",
      "Blood",
      "Liver",
    ],
    effects: {
      Transmutation:
        "Whenever you use a buffing spell, it causes the target to bleed each turn while active",
      Conjuration:
        "If your attack inflicts bleed, double the bleed damage",
      Geomancy:
        "Bleed damage is doubled in your geomancy construct",
      Necromancy:
        "Whenever using a corpse spell, you can use that corpse again immediately to create a necromantic servant",
    },
  },
  {
    name: "Sal Gemmae (Rock Salt)",
    properties: ["Dry", "Gender-Neutral", "Heart", "Spring", "Celestial", "Infancy"],
    effects: {
      Transmutation:
        "Give 25% stamina regeneration when using a buffing spell",
      Conjuration:
        "Restore 25 stamina after using your spell",
      Geomancy:
        "Everyone within your geomancy construct gains 10% stamina regeneration per turn",
      Necromancy:
        "Whenever using a healing spell, restore 10 stamina per 100 health healed",
    },
  },
  {
    name: "Silver",
    properties: ["Feminine", "Adulthood", "Melancholic", "Celestial", "Winter", "Cold"],
    effects: {
      Transmutation:
        "Cleanse chill buildup by 100 or if the target is already chilled, cleanse the condition itself when using a buffing spell. ",
      Conjuration:
        " Give your attack 140 chill application or increase its chill application by 50%.",
      Geomancy:
        "Everyone that is within your geomancy construct gains 75 chill buildup per turn.",
      Necromancy:
        "Any corpse you use gives 100 chill buildup to everyone that is within corpse explosion range.",
    },
  },
  {
    name: "Soap",
    properties: ["Wet", "Feminine", "Phlegm", "Phlegmatic", "Spleen", "Supine"],
    effects: {
      Transmutation:
        "When using a buffing spell, cleanse all negative debuffs on the target",
      Conjuration:
        "If the enemy has a status effect, remove it but deal double damage",
      Geomancy:
        "Everyone in your geomancy construct loses 40 buildup of all status effects per turn",
      Necromancy:
        "Whenever using a healing spell, cleanse a single negative debuff",
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
        "After your attack, the enemy loses 50 defense (for that damage type) for 3 turns",
      Geomancy:
        "Everyone in your geomancy construct gains 40 defense of your choosing",
      Necromancy:
        "Whenever using a healing spell, increase one of their defenses by 60 until end of their next turn",
    },
  },
  {
    name: "Verdigris",
    properties: ["Feminine", "Western", "Eastern", "Black Bile", "Yellow Bile", "Autumn"],
    effects: {
      Transmutation:
        "When using a buffing spell, decrease one defense of your choosing by 75",
      Conjuration:
        "Your attack ignores the defense of the enemy (but not absorption)",
      Geomancy:
        "Everyone in your geomancy construct loses 40 defense of your choosing",
      Necromancy:
        "Any corpse you use lowers 1 defense of your choosing by 60 to everyone within corpse explosion range (3-turn duration)",
    },
  },
  {
    name: "Wax",
    properties: [
      "Wet",
      "Hot",
      "Summer",
      "Masculine",
      "Celestial",
      "Heart",
      "Non-Existence",
    ],
    effects: {
      Transmutation:
        "Give 25% focus regeneration when using a buffing spell",
      Conjuration:
        "Refund 50% of the Focus cost after casting your spell",
      Geomancy:
        "Everyone in your geomancy construct gains 10% focus regeneration per turn",
      Necromancy:
        "Whenever you heal with a spell, restore 10 focus per every 100 health healed",
    },
  },
  {
    name: "Copper",
    properties: [
      "Northern",
      "Gallbladder",
      "Heart",
      "Elderly",
      "Summer",
      "Celestial",
      "Feminine",
    ],
    effects: {
      Transmutation:
        "Cleanse shock buildup by 100, or if target is already shocked, cleanse the condition itself",
      Conjuration:
        "Give your attack 140 shock application or increase its shock by 50%",
      Geomancy:
        "Everyone in your geomancy construct gains 75 shock buildup per turn",
      Necromancy:
        "Any corpse you use gives 100 shock buildup to everyone within corpse explosion range",
    },
  },
  {
    name: "Iron",
    properties: ["Masculine", "Alcohol", "Blood", "Liver", "Sanguine", "Youth"],
    effects: {
      Transmutation:
        "When using a buffing spell, increase one defense by 15% absorption",
      Conjuration:
        "After your attack, the enemy loses 10% absorption (of that damage type) for 3 turns",
      Geomancy:
        "Everyone in the geomancy construct loses 10% absorption of your choosing",
      Necromancy:
        "Any corpse you use lowers 1 defense of your choosing by 10% absorption to everyone in range (3-turn duration)",
    },
  },
  {
    name: "Tin",
    properties: [
      "Neither Dry or Wet",
      "Spleen",
      "Winter",
      "Black Bile",
      "Alcohol",
      "Eastern",
    ],
    effects: {
      Transmutation:
        "When using a buffing spell, increase crit rate of your choosing by 20%",
      Conjuration:
        "Your crit rate is increased by 10% and your crit damage is increased by 25% for this attack",
      Geomancy:
        "Everyone in your geomancy construct gains +10% crit rate",
      Necromancy:
        "Gain +10% crit rate on your attacking spells. If you crit using a lifesteal spell, heal based on the base damage (with the crit) instead of the normal portion",
    },
  },
  {
    name: "Lead",
    properties: [
      "Neither Hot or Cold",
      "Adulthood",
      "Western",
      "Yellow Bile",
      "Brain",
      "Liver",
    ],
    effects: {
      Transmutation:
        "When using a buffing spell, increase one resistance of your choosing by 100",
      Conjuration:
        "After your attack, choose a resistance of the enemy; they lose 50 of that resistance",
      Geomancy:
        "Everyone in your geomancy construct gains +50 to one resistance of your choosing",
      Necromancy:
        "Whenever using a healing spell, increase one resistance by +75 until the end of their next turn",
    },
  },
];



