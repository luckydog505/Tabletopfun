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
import { Material, allMaterials } from "@/data/materials";
import { Spell, conjurationSpells, geomancySpells, necromancySpells, spellsBySchool, transmutationSpells } from "@/data/spellData";
import { useEffect, useState } from "react";

export default function AlchemySpellSelector() {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [availableMaterials, setAvailableMaterials] = useState<Material[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  // Dark Mode effect remains the same
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Update findMatchingMaterials to use Material and Spell types
  const findMatchingMaterials = (spell: Spell | null, school: string | null) => {
    if (!spell || !school) return [];
    return allMaterials.filter((material) =>
      material.properties.some((prop) => spell.properties.includes(prop))
    );
  };

  // Rest of your component remains the same, but we'll define spellsBySchool here
  const schools: Record<string, Spell[]> = {
    Transmutation: transmutationSpells,
    Conjuration: conjurationSpells,
    Geomancy: geomancySpells,
    Necromancy: necromancySpells,
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
    <div className="min-h-screen">
      {/* Dark Mode Toggle */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <Card className="w-full max-w-4xl mx-auto">
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

                <p className="text-sm font-medium mb-1">
                  <strong>Focus:</strong> {selectedSpell.focus}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
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
                    {availableMaterials.map((material) => {
                      // Show the effect for whichever school is chosen
                      const effectForSchool =
                        selectedSchool &&
                        (selectedSchool === "Transmutation" ||
                          selectedSchool === "Conjuration"
                          || selectedSchool === "Geomancy"
                          || selectedSchool === "Necromancy")
                          ? material.effects[selectedSchool]
                          : "No effect listed.";

                      return (
                        <Card
                          key={material.name}
                          className="p-3 bg-gray-50 dark:bg-gray-800"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h5 className="font-semibold">{material.name}</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    No matching material enhancements found.
                  </p>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
