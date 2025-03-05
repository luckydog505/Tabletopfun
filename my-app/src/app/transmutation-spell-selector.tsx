import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

// Transmutation Spells from the document
const transmutationSpells = [
  {
    name: "Give me, Strength",
    properties: ["Western", "Adulthood", "Sanguine", "Masculine"],
    materials: ["2 Salt", "1 Property"],
    description: "Touch yourself or an adjacent ally, give them 35 temporary STR until the end of their second turn."
  },
  {
    name: "Give me, Dexterity",
    properties: ["Eastern", "Youth", "Phlegmatic", "Feminine"],
    materials: ["2 Mercury", "1 Property"],
    description: "Touch yourself or an adjacent ally, give them 35 temporary DEX until the end of their second turn."
  },
  {
    name: "Altered Self",
    properties: ["Phlegm", "Phlegmatic", "Yellow Bile", "Black Bile"],
    materials: ["3 Mercury", "1 Property"],
    description: "Touch yourself or an adjacent ally. Choose to give them either two of the following buffs: +10 to hit, +10% damage or +10 evasion until the end of their second turn."
  },
  {
    name: "Polymorph",
    properties: ["Phlegmatic", "Infancy", "Blood", "Brain"],
    materials: ["3 Mercury", "1 Property"],
    description: "Touch yourself or an adjacent ally and cause them to change their shape to a creature or being of your choosing. This lasts for an hour."
  },
  {
    name: "Fleet-Footed",
    properties: ["Youth", "Liver", "Gender Neutral", "Neither Hot or Cold"],
    materials: ["1 Sulfur", "1 Salt", "1 Property"],
    description: "Touch yourself or an adjacent ally and give them double movement speed until the end of their turn."
  },
  {
    name: "Lesser Wings",
    properties: ["Sanguine", "Feminine", "Spleen", "Northern"],
    materials: ["1 Sulfur", "1 Mercury", "1 Property"],
    description: "Touch yourself or an adjacent ally and give them wings that last until the end of your second turn."
  },
  {
    name: "Barkskin",
    properties: ["Dry", "Spring", "Masculine", "Adulthood"],
    materials: ["2 Salt", "1 Property"],
    description: "Touch yourself or an adjacent ally, give them 40 temporary Slashing and Piercing defense until the end of their third turn."
  }
];

// Additional materials from the document with their Transmutation properties
const transmutationMaterials = [
  {
    name: "Alkaline Salt",
    properties: ["Neither cold or hot", "Dry", "Directionless", "Heart", "Supine", "Infancy", "Gender neutral"],
    effect: "Cleanse toxic and all toxic buildup when applying a buffing spell"
  },
  {
    name: "Alum",
    properties: ["Wet", "Cold", "Black Bile", "Southern", "Autumn", "Spring", "Yellow Bile"],
    effect: "Boost stealth by +25 when applying a buffing spell"
  },
  {
    name: "Sal Ammoniac",
    properties: ["Hot", "Dry", "Eastern", "Phlegmatic", "Phlegm", "Wet", "Alcohol", "Summer"],
    effect: "Give +50 Fire Defense when applying a buffing spell"
  },
  {
    name: "Aqua Vitae",
    properties: ["Alcohol", "Supine", "Liver", "Adulthood", "Elderly", "Non-existence", "Directionless"],
    effect: "Restore 50% health of the person you are buffing with a buffing spell"
  },
  {
    name: "Oil",
    properties: ["Gender Neutral", "Hot", "Wet", "Non-Existence", "Phlegmatic", "Choleric"],
    effect: "Give +20 evasion when using a buffing spell"
  },
  {
    name: "Quicklime",
    properties: ["Dry", "Northern", "Winter", "Adulthood", "Melancholic", "Directionless", "Gender-Neutral"],
    effect: "Give health regeneration of 25% of their max health per turn when using a buffing spell"
  },
  {
    name: "Realgar",
    properties: ["Non-Existence", "Neither hot or cold", "Neither dry or wet", "Sanguine", "Blood", "Liver"],
    effect: "Whenever you use a buffing spell, it now causes the individual it applies to bleed every turn while that buff is active at the start of their turn"
  },
  {
    name: "Sal Gemmae",
    properties: ["Dry", "Gender-Neutral", "Heart", "Spring", "Celestial", "Infancy"],
    effect: "Give 25% stamina regeneration when using a buffing spell"
  },
  {
    name: "Soap",
    properties: ["Wet", "Feminine", "Phlegm", "Phlegmatic", "Spleen", "Supine"],
    effect: "When using a buffing spell, cleanse all negative debuffs"
  },
  {
    name: "Urine",
    properties: ["Hot", "Wet", "Northern", "Spring", "Infancy", "Alcohol", "Liver", "Choleric", "Gallbladder", "Yellow Bile"],
    effect: "When using a buffing spell, increase one defense of your choosing by 75"
  },
  {
    name: "Wax",
    properties: ["Wet", "Hot", "Summer", "Masculine", "Celestial", "Heart", "Non-Existence"],
    effect: "Give 25% focus regeneration when using a buffing spell"
  }
];

const TransmutationSpellSelector = () => {
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [availableMaterials, setAvailableMaterials] = useState([]);

  const findMatchingMaterials = (spell) => {
    if (!spell) return [];

    return transmutationMaterials.filter(material => 
      material.properties.some(prop => spell.properties.includes(prop))
    );
  };

  const handleSpellChange = (spellName) => {
    const spell = transmutationSpells.find(s => s.name === spellName);
    setSelectedSpell(spell);
    setAvailableMaterials(findMatchingMaterials(spell));
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Transmutation Spell Selector</CardTitle>
        <CardDescription>Select a Transmutation spell to see matching material enhancements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select onValueChange={handleSpellChange}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a Transmutation Spell" />
            </SelectTrigger>
            <SelectContent>
              {transmutationSpells.map(spell => (
                <SelectItem key={spell.name} value={spell.name}>
                  {spell.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedSpell && (
            <div>
              <h3 className="text-lg font-semibold mb-2">{selectedSpell.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{selectedSpell.description}</p>
              
              <div className="mb-2">
                <strong>Spell Properties:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedSpell.properties.map(prop => (
                    <Badge key={prop} variant="secondary">{prop}</Badge>
                  ))}
                </div>
              </div>

              <div className="mb-2">
                <strong>Required Materials:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedSpell.materials.map(mat => (
                    <Badge key={mat} variant="outline">{mat}</Badge>
                  ))}
                </div>
              </div>

              <h4 className="text-md font-semibold mt-4 mb-2">Matching Material Enhancements:</h4>
              {availableMaterials.length > 0 ? (
                <div className="space-y-2">
                  {availableMaterials.map(material => (
                    <Card key={material.name} className="p-3 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-semibold">{material.name}</h5>
                          <p className="text-sm text-gray-600">{material.effect}</p>
                        </div>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {material.properties.map(prop => (
                            <Badge key={prop} variant="secondary" className="text-xs">{prop}</Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No matching material enhancements found.</p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransmutationSpellSelector;
