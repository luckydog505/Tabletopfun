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
import { Spell, spellsBySchool } from "@/data/spellData";

import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";

export default function AlchemySpellSelector() {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [availableMaterials, setAvailableMaterials] = useState<Material[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  // Easter Egg State
  const [gnomed, setGnomed] = useState(false);

  // We have two audio refs for two different sounds
  const audioRef1 = useRef<HTMLAudioElement>(null);
  const audioRef2 = useRef<HTMLAudioElement>(null);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Finds materials that share a property with the chosen spell
  const findMatchingMaterials = (spell: Spell | null, school: string | null) => {
    if (!spell || !school) return [];
    return allMaterials.filter((material) =>
      material.properties.some((prop) => spell.properties.includes(prop))
    );
  };

  // Handle School selection
  const handleSchoolChange = (schoolName: string) => {
    setSelectedSchool(schoolName);
    setSelectedSpell(null);
    setAvailableMaterials([]);
  };

  // Handle Spell selection
  const handleSpellChange = (spellName: string) => {
    if (!selectedSchool) return;
    const spells = spellsBySchool[selectedSchool] || [];
    const spell = spells.find((s) => s.name === spellName) || null;
    setSelectedSpell(spell);

    if (!spell) {
      setAvailableMaterials([]);
      return;
    }
    // Gather matching materials
    const matching = findMatchingMaterials(spell, selectedSchool);
    setAvailableMaterials(matching);
  };

  // Easter egg button: confetti + image + two sounds
  const handleGnomedClick = () => {
    // 1) Confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // 2) Show gnome image
    setGnomed(true);

    // 3) Play first audio
    if (audioRef1.current) {
      audioRef1.current.currentTime = 0;
      audioRef1.current.play().catch((err) => console.error(err));
    }
    // 4) Play second audio
    if (audioRef2.current) {
      audioRef2.current.currentTime = 0;
      audioRef2.current.play().catch((err) => console.error(err));
    }
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
                <h3 className="text-lg font-semibold mb-2">
                  {selectedSpell.name}
                </h3>

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
                        ["Transmutation", "Conjuration", "Geomancy", "Necromancy"].includes(
                          selectedSchool
                        )
                          ? material.effects[selectedSchool as keyof typeof material.effects]
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

      {/* Easter Egg Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleGnomedClick}
          className="text-xs text-gray-500 hover:underline"
        >
          gnomed
        </button>
      </div>

      {/* Two hidden audio elements for the easter egg */}
      <audio ref={audioRef1} src="/gnome-sound1.mp3" />
      <audio ref={audioRef2} src="/gnome-sound2.mp3" />

      {/* If gnomed, show the image */}
      {gnomed && (
        <div className="flex justify-center mt-4">
          <img
            src="/gnome-image.png"
            alt="You got gnomed!"
            className="max-w-xs"
          />
        </div>
      )}
    </div>
  );
}
